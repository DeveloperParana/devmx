import { AccountsService, ChangeRolesUseCase } from '../../../server';
import { AccessDeniedError } from '@devmx/shared-util-errors';
import { add, merge, use } from '@devmx/shared-util-data';
import {
  account,
  authUser,
  accountRole,
  AccountsServiceMock,
} from '../../mocks';

describe('Change Roles UseCase', () => {
  let useCase: ChangeRolesUseCase;

  beforeAll(async () => {
    await add({
      for: AccountsService,
      use: AccountsServiceMock,
    });

    await add({
      for: ChangeRolesUseCase,
      add: [AccountsService],
    });
  });

  beforeEach(() => {
    useCase = use(ChangeRolesUseCase);
  });

  it('member assign staff should throw access denied', async () => {
    const assign = { id: '', roles: merge(accountRole, { staff: true }) };

    const assigner = merge(authUser, {
      roles: merge(accountRole, { member: true }),
    });

    await expect(useCase.execute({ assign, assigner })).rejects.toThrow(
      AccessDeniedError
    );
  });

  it('staff assign manager should throw access denied', async () => {
    const assign = { id: '', roles: merge(accountRole, { manager: true }) };

    const assigner = merge(authUser, {
      roles: merge(accountRole, { staff: true }),
    });

    await expect(useCase.execute({ assign, assigner })).rejects.toThrow(
      AccessDeniedError
    );
  });

  it('manager assign staff should be ok', async () => {
    const assign = { id: '', roles: merge(accountRole, { staff: true }) };

    const assigner = merge(authUser, {
      roles: merge(accountRole, { manager: true }),
    });

    const result = { ...account, ...assign, id: assign.id };

    await expect(useCase.execute({ assign, assigner })).resolves.toStrictEqual(
      result
    );
  });
});
