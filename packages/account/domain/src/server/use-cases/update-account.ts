import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { Account, Findable, UseCase } from '@devmx/shared-api-interfaces';
import { AccountsService } from '../services';

export class UpdateAccountUseCase
  implements UseCase<Findable<Account>, Account>
{
  constructor(private accountsService: AccountsService) {}

  async execute(data: Findable<Account>) {
    const account = await this.accountsService.findOne(data.id);

    if (!account) {
      throw new NotFoundError();
    }

    const updated = await this.accountsService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError();
    }

    return updated;
  }
}
