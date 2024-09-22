import { SignIn, SignUp, AuthUser } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
} from '@devmx/account-domain/client';

interface AuthState {
  user: AuthUser | null;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  connected$ = this.select(() => !!this.accessToken);

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  constructor(
    private signInUseCase: SignInUseCase,
    private signUpUseCase: SignUpUseCase,
    private loadAuthUserUseCase: LoadAuthUserUseCase
  ) {
    super({ user: null });
  }

  loadAuthUser() {
    const request$ = this.loadAuthUserUseCase.execute();

    const onAuthUser = (user: AuthUser) => {
      this.setState({ user });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  signIn(data: SignIn) {
    const request$ = this.signInUseCase.execute(data);

    const onAuthUser = (user: AuthUser) => {
      this.setState({ user });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  signUp(data: SignUp) {
    const request$ = this.signUpUseCase.execute(data);

    const onAuthUser = (user: AuthUser) => {
      this.setState({ user });
    };

    request$.pipe(take(1)).subscribe(onAuthUser);
  }

  clearAccessToken() {
    localStorage.removeItem('accessToken');
  }
}
