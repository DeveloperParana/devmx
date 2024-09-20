import { PresentationsController } from './presentations.controller';
import { Test, TestingModule } from '@nestjs/testing';
import {
  providePresentationsFacade,
  providePresentationsServiceTest,
} from '../accounts.providers';

describe('PresentationsController', () => {
  let controller: PresentationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentationsController],
      providers: [providePresentationsServiceTest(), providePresentationsFacade()],
    }).compile();

    controller = module.get<PresentationsController>(PresentationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
