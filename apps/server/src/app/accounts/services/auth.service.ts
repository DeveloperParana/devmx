import { AccessTokenDto, SignInDto, SignUpDto } from '../dtos';

export abstract class AuthService {
  abstract signIn(signInDto: SignInDto): Promise<AccessTokenDto>;

  abstract signUp(signUpDto: SignUpDto): Promise<AccessTokenDto>;
}
