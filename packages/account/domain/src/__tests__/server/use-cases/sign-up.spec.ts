import { AccountsService, SignUpUseCase, CryptoService } from '../../../server';
import { AccountsServiceMock, CryptoServiceMock } from '../../mocks';
import { ConflictError } from '@devmx/shared-util-errors';
import { add, use } from '@devmx/shared-util-data';

describe('Change Roles UseCase', () => {
  let useCase: SignUpUseCase;

  beforeAll(async () => {
    await add({
      for: AccountsService,
      use: AccountsServiceMock,
    });

    await add({
      for: CryptoService,
      use: CryptoServiceMock,
    });

    await add({
      for: SignUpUseCase,
      use: SignUpUseCase,
      add: [AccountsService, CryptoService],
    });
  });

  beforeEach(() => {
    useCase = use(SignUpUseCase);
  });

  it('sign up should fail', async () => {
    const data = {
      name: { first: 'Gui', last: 'Seek' },
      email: 'guilherme@devpr.org',
      username: 'guiseek',
      password: 'x',
    };
    await expect(useCase.execute(data)).rejects.toThrow(ConflictError);
  });

  it('sign up should fail', async () => {
    const data = {
      name: { first: 'Gui', last: 'Seek' },
      email: 'guilherme@devpr.org',
      username: 'user',
      password: 'x',
    };

    await expect(useCase.execute(data)).resolves.toStrictEqual({
      name: { first: 'Gui', last: 'Seek' },
      email: 'guilherme@devpr.org',
      username: 'user',
      password: 'Ç]',
      roles: {
        member: true,
        speaker: false,
        neighbor: false,
        academic: false,
        recruiter: false,
        donor: false,
        leader: false,
        staff: false,
        fellow: false,
        manager: false,
        director: false,
      },
      active: true,
      id: '66f706967d818c4004effb48',
    });
  });
});
