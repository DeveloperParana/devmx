import { AccessToken, SignIn, UseCase } from '@devmx/shared-api-interfaces';
import { AuthenticationError } from '@devmx/shared-util-errors';
import { Env } from '@devmx/shared-api-interfaces/server';
import { CryptoService, JwtService } from '../ports';
import { AccountsService } from '../services';

export class SignInUseCase implements UseCase<SignIn, AccessToken> {
  constructor(
    private accountsService: AccountsService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
    private env: Env
  ) {}

  async execute({ username, password }: SignIn) {
    const value = new RegExp(username, 'i');
    const filter = { username: value };

    const account = await this.accountsService.findOneBy(filter);

    if (!account) {
      throw new AuthenticationError('Credenciais inválidas');
    }

    const passwordMatched = this.cryptoService.compare(
      password,
      account.password
    );

    if (!passwordMatched) {
      throw new AuthenticationError('Credenciais inválidas');
    }

    const { id: sub, name, email, roles, photo = '' } = account;
    const payload = { sub, name, email, roles, username, photo };
    const options = { secret: this.env.jwt.secret };

    const accessToken = await this.jwtService.signAsync(payload, options);

    return { accessToken };
  }
}
