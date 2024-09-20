import { Test, TestingModule } from '@nestjs/testing';
import { PresentationsService } from './presentations.service';
import { providePresentationsServiceTest } from '../accounts.providers';

describe('PresentationsService', () => {
  let service: PresentationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [providePresentationsServiceTest()],
    }).compile();

    service = module.get<PresentationsService>(PresentationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
