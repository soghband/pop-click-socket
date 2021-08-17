import { Test, TestingModule } from '@nestjs/testing';
import { PopSocketGateway } from './pop-socket.gateway';

describe('PopSocketGateway', () => {
  let gateway: PopSocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopSocketGateway],
    }).compile();

    gateway = module.get<PopSocketGateway>(PopSocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
