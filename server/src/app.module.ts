import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopSocketGateway } from './pop-socket.gateway';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './entity/score.entity';
import { ScoreService } from './services/score/score.service';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, 'client') }),
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
