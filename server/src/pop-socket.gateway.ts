import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class PopSocketGateway {
  @SubscribeMessage('initClient')
  handleMessage(client: any, payload: any): string {
    console.log(JSON.stringify(client));
    return 'Hello world!';
  }
}
