import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Server } from 'socket.io';
import { ScoreService } from './services/score/score.service';
import { interval } from 'rxjs';

@WebSocketGateway({ cors: true })
export class PopSocketGateway implements OnGatewayInit {
  constructor(private jwt: JwtService, private scoreData: ScoreService) {}

  @WebSocketServer() server: Server;

  afterInit() {
    interval(10000).subscribe(async () => {
      const topTenData = await this.scoreData.getTopTen();
      this.server.emit('updateTopTenScroll', topTenData);
    });
  }

  @SubscribeMessage('initClient')
  handleMessage(client: any, payload: any) {
    const refinedData = {
      ...payload,
      reportScore: 0,
    };
    const token = this.jwt.sign(refinedData);
    this.server.to(client.id).emit('updateToken', {
      reportScroll: 0,
      token,
    });
  }

  @SubscribeMessage('initClientToken')
  handleInitToken(client: any, payload: any) {
    const jwtData: any = this.jwt.decode(payload.token);
    if (jwtData) {
      const newTokenData = {
        city: jwtData.city,
        country: jwtData.country,
        countryCode: jwtData.countryCode,
        reportScore: jwtData.reportScore,
      };
      const token = this.jwt.sign(newTokenData);
      this.server.to(client.id).emit('initToken', {
        reportScore: jwtData.reportScore,
        token: token,
      });
    }
  }

  @SubscribeMessage('updateScore')
  async handleUpdateScore(client: any, payload: any) {
    const jwtData: any = this.jwt.decode(payload.token);
    if (jwtData) {
      const countryData = await this.scoreData.getScoreByCity(
        jwtData.city,
        jwtData.countryCode,
      );
      if (countryData.length === 0) {
        await this.scoreData.insertScore(payload.score, jwtData);
      } else {
        const addScore = payload.score - jwtData.reportScore;
        await this.scoreData.updateScore(
          addScore + countryData[0].score,
          jwtData,
        );
      }
      const newTokenData = {
        city: jwtData.city,
        country: jwtData.country,
        countryCode: jwtData.countryCode,
        reportScore: payload.score,
      };
      const token = this.jwt.sign(newTokenData);
      this.server.to(client.id).emit('updateToken', {
        reportScore: payload.score,
        token: token,
      });
    } else {
      this.server.to(client.id).emit('requestNewToken');
    }
  }
}
