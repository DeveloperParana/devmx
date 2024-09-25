import { AccessDeniedError, PersistenceError } from '@devmx/shared-util-errors';
import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountLevel } from '@devmx/shared-util-data';
import { AccountsService } from '../services';
import { ChangeRolesBy } from '../dtos';

export class ChangeRolesUseCase implements UseCase<ChangeRolesBy, Account> {
  constructor(private accountsService: AccountsService) {}

  async execute(data: ChangeRolesBy) {
    const assignerLevel = new AccountLevel(data.assigner);

    const roles = data.assign.newRoles;

    const assignLevel = new AccountLevel({ roles });

    if (assignLevel.level > 0 && assignLevel.level < assignerLevel.level) {
      throw new AccessDeniedError('Permissão insuficiente');
    }

    const changed = await this.accountsService.update(data.assign.id, {
      roles,
    });

    if (!changed) {
      throw new PersistenceError('Problema ao persistir nova senha');
    }

    return changed;
  }
}
