import { provideAccountsFacade, provideAccountsServiceTest } from '../accounts.providers';
import { AccountsController } from './accounts.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('AccountsController', () => {
  let controller: AccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [
        provideAccountsServiceTest(),
        provideAccountsFacade()
      ],
    }).compile();

    controller = module.get<AccountsController>(AccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
