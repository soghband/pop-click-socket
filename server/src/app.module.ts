import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopSocketGateway } from './pop-socket.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PopSocketGateway],
})
export class AppModule {}
