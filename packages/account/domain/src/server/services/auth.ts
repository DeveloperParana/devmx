import { AccessToken, SignIn, SignUp } from '@devmx/shared-api-interfaces';

export abstract class AuthService {
  abstract signIn(signInDto: SignIn): Promise<AccessToken>;

  abstract signUp(signUpDto: SignUp): Promise<AccessToken>;
}
