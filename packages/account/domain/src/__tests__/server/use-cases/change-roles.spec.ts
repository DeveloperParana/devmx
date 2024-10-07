import { add, DEFAULT_ROLES, merge, use } from '@devmx/shared-util-data';
import { AccountsService, ChangeRolesUseCase } from '../../../server';
import { account, authUser, AccountsServiceMock } from '../../mocks';
import { AccessDeniedError } from '@devmx/shared-util-errors';

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
    const assign = {
      id: '66f706967d818c4004effb48',
      roles: merge(DEFAULT_ROLES, { staff: true }),
    };

    const assigner = merge(authUser, {
      roles: merge(DEFAULT_ROLES, { member: true }),
    });

    await expect(useCase.execute({ assign, assigner })).rejects.toThrow(
      AccessDeniedError
    );
  });

  it('staff assign manager should throw access denied', async () => {
    const assign = {
      id: '66f706967d818c4004effb48',
      roles: merge(DEFAULT_ROLES, { manager: true }),
    };

    const assigner = merge(authUser, {
      roles: merge(DEFAULT_ROLES, { staff: true }),
    });

    await expect(useCase.execute({ assign, assigner })).rejects.toThrow(
      AccessDeniedError
    );
  });

  it('manager assign staff should be ok', async () => {
    const assign = {
      id: '66f706967d818c4004effb48',
      roles: merge(DEFAULT_ROLES, { staff: true }),
    };

    const assigner = merge(authUser, {
      roles: merge(DEFAULT_ROLES, { manager: true }),
    });

    const result = { ...account, ...assign, id: assign.id };

    await expect(useCase.execute({ assign, assigner })).resolves.toStrictEqual(
      result
    );
  });
});
