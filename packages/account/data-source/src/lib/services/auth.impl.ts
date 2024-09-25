import { QueryFilterDto } from '@devmx/shared-data-source';
import { Env } from '@devmx/shared-api-interfaces/server';
import { Account } from '@devmx/shared-api-interfaces';
import { AccessTokenDto, SignInDto } from '../dtos';
import {
  JwtService,
  AuthService,
  CryptoService,
  AccountsService,
} from '@devmx/account-domain/server';

export class AuthServiceImpl implements AuthService {
  constructor(
    private accountsService: AccountsService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
    private env: Env
  ) {}

  async signIn({ username, password }: SignInDto): Promise<AccessTokenDto> {
    const filter = new QueryFilterDto({ username });
    const account = await this.accountsService.findOneBy(filter);

    if (!account) throw `Credenciais inválidas`;

    const passwordMatched = this.cryptoService.compare(
      password,
      account.password
    );

    if (!passwordMatched) throw `Credenciais inválidas`;

    const { id: sub, name, email, roles, photo = '' } = account;
    const payload = { sub, name, email, username, roles, photo };
    const options = { secret: this.env.jwt.secret };
    const accessToken = await this.jwtService.signAsync(payload, options);

    return new AccessTokenDto(accessToken);
  }

  async signUp(data: Account) {
    const password = this.cryptoService.hash(data.password);
    await this.accountsService.create({ ...data, password, active: true });
    return this.signIn(data);
  }
}
