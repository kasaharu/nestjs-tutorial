import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('Cats Controller', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('call findAll() method', () => {
    expect(controller.findAll()).toBe('This action returns all cats');
  });

  it('call create() method', () => {
    expect(controller.create()).toBe('This action adds a new cat');
  });
});
