import { AccessDeniedError, PersistenceError } from '@devmx/shared-util-errors';
import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountLevel } from '@devmx/shared-util-data';
import { ChangeRolesBy } from '../../lib/dtos';
import { AccountsService } from '../services';

export class ChangeRolesUseCase implements UseCase<ChangeRolesBy, Account> {
  constructor(private accountsService: AccountsService) {}

  async execute(data: ChangeRolesBy) {
    const assignerLevel = new AccountLevel(data.assigner);

    const assignLevel = new AccountLevel(data.assign);

    if (assignLevel.level > 0 && assignLevel.level > assignerLevel.level) {
      throw new AccessDeniedError('Permissão insuficiente');
    }

    const changed = await this.accountsService.update(
      data.assign.id,
      data.assign
    );

    if (!changed) {
      throw new PersistenceError('Problema ao persistir nova senha');
    }

    return changed;
  }
}
