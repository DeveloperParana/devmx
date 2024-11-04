import { AuthenticationError, NotFoundError } from '@devmx/shared-util-errors';
import { UseCase, User } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/server';
import { UpdatePassword } from '../../lib/dtos';
import { UsersService } from '../services';
import { CryptoService } from '../ports';

export class UpdatePasswordUseCase
  implements UseCase<UpdatePassword, User | null>
{
  constructor(
    private usersService: UsersService,
    private cryptoService: CryptoService,
    private env: Env
  ) {}

  async execute(data: UpdatePassword) {
    const user = await this.usersService.findOne(data.id);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado');
    }

    const codeConfirmed = user.code?.value === data.code;

    if (!codeConfirmed) {
      throw new AuthenticationError('Código inválido');
    }

    const timestamp = user.code?.timestamp.getTime() ?? 0;

    const codeExpired = Date.now() < timestamp + this.env.auth.codeLifeTime;

    if (!codeExpired) {
      throw new AuthenticationError('Código expirado');
    }

    const salt = this.cryptoService.genSalt();
    const hash = this.cryptoService.hash(data.password, salt);

    const password = { hash, salt };

    return this.usersService.updatePassword(data.id, password);
  }
}
