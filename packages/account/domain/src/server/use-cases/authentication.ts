import { AuthenticationError } from '@devmx/shared-util-errors';
import { AccessToken, UseCase } from '@devmx/shared-api-interfaces';
import { Env } from '@devmx/shared-api-interfaces/server';
import { ValidateUserCode } from '../../lib/dtos';
import { UsersService } from '../services';
import { JwtService } from '../ports';

export class AuthenticationUseCase
  implements UseCase<ValidateUserCode, AccessToken>
{
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private env: Env
  ) {}

  async execute(data: ValidateUserCode) {
    const user = await this.usersService.findOneBy('name', data.name);

    if (!user || !user.code) {
      throw new AuthenticationError('Não autorizado, já criou sua conta?');
    }

    const codeConfirmed = user.code.value === data.code;

    if (!codeConfirmed) {
      throw new AuthenticationError();
    }

    const timestamp = user.code.timestamp.getTime();

    const codeExpired = Date.now() < timestamp + this.env.auth.codeLifeTime;

    if (!codeExpired) {
      throw new AuthenticationError();
    }

    delete user['code'];

    await this.usersService.update(user.id, user);

    const { name, displayName, contact, roles, id: sub } = user;

    const payload = { name, displayName, contact, roles, sub };

    const options = { secret: this.env.jwt.secret };

    const accessToken = await this.jwtService.signAsync(payload, options);

    return { accessToken };
  }
}
