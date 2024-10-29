import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { AccountsService } from '../services';

export class FindAboutAccountUseCase implements UseCase<string, AccountOut> {
  constructor(private accountsService: AccountsService) {}

  async execute(username: string) {
    const account = await this.accountsService.findOneBy({username});

    if (!account) {
      throw new NotFoundError('Conta não encontrada');
    }

    return account;
  }
}
