import { Account, UseCase } from '@devmx/shared-api-interfaces';
import { AccountLevel, deepDiff } from '@devmx/shared-util-data';
import { ChangeRolesBy } from '../../lib/dtos';
import { AccountsService } from '../services';
import {
  NotFoundError,
  PersistenceError,
  AccessDeniedError,
} from '@devmx/shared-util-errors';

export class ChangeRolesUseCase implements UseCase<ChangeRolesBy, Account> {
  constructor(private accountsService: AccountsService) {}

  async execute(data: ChangeRolesBy) {
    const assignerLevel = new AccountLevel(data.assigner);

    const account = await this.accountsService.findOne(data.assign.id);

    if (!account) {
      throw new NotFoundError('Conta não encontrada');
    }

    const changedRoles = deepDiff(account.roles, data.assign.roles);

    const assign = { id: data.assign.id, roles: changedRoles };

    const assignLevel = new AccountLevel(assign);

    if (assignLevel.level > 0 && assignLevel.level > assignerLevel.level) {
      throw new AccessDeniedError('Permissão insuficiente');
    }

    const changed = await this.accountsService.update(data.assign.id, data.assign);

    if (!changed) {
      throw new PersistenceError('Problema ao persistir novas permissões');
    }

    return changed;
  }
}
