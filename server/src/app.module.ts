import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopSocketGateway } from './pop-socket.gateway';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entity/score.entity';
import {ScoreService} from "./services/score/score.service";

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60d' },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../db.sqlite',
      logging: true,
      entities: [Score],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PopSocketGateway, ScoreService],
})
export class AppModule {}
