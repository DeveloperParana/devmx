import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { Account, Findable, UseCase } from '@devmx/shared-api-interfaces';
import { UpdateAccount } from '../../lib/dtos';
import { AccountsService } from '../services';

export class UpdateAccountUseCase
  implements UseCase<Findable<UpdateAccount>, Account>
{
  constructor(private accountsService: AccountsService) {}

  async execute(data: Findable<UpdateAccount>) {
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
