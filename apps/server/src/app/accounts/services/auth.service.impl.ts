import { SignInDto, SignUpDto, AccessTokenDto, QueryFilterDto } from '../dtos';
import { AccountsService } from './accounts.service';
import { CryptoService } from './crypto.service';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import { Env } from '../../shared';

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

    const { id: sub, name, email, photo = '' } = account;
    const payload = { sub, name, email, username, photo };
    const options = { secret: this.env.jwt.secret };
    const accessToken = await this.jwtService.signAsync(payload, options);

    return new AccessTokenDto(accessToken);
  }

  async signUp(signUpDto: SignUpDto) {
    const password = this.cryptoService.hash(signUpDto.password);
    await this.accountsService.create({ ...signUpDto, password, active: true });
    return this.signIn(signUpDto);
  }
}
