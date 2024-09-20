import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { provideAccountsServiceTest } from '../accounts.providers';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [provideAccountsServiceTest()],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
