import { AccountLevel } from '@devmx/shared-util-data';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  SignIn,
  SignUp,
  AuthUser,
  Challenge,
} from '@devmx/shared-api-interfaces';
import {
  SignInUseCase,
  SignUpUseCase,
  LoadAuthUserUseCase,
  RequestChallengeUseCase,
} from '@devmx/account-domain/client';

interface AuthState {
  user: AuthUser | null;
  level: AccountLevel | null;
  challenge: string | null;
  webauthAvailable: boolean | null;
}

export class AuthFacade extends State<AuthState> {
  user$ = this.select((state) => state.user);

  level$ = this.select((state) => state.level);

  connected$ = this.select(() => !!this.accessToken);

  challenge$ = this.select((state) => state.challenge);

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  constructor(
    private signInUseCase: SignInUseCase,
    private signUpUseCase: SignUpUseCase,
    private loadAuthUserUseCase: LoadAuthUserUseCase,
    private requestChallengeUseCase: RequestChallengeUseCase
  ) {
    super({ user: null, level: null, challenge: null, webauthAvailable: null });
  }

  checkWebAuthn() {
    const webauthAvailable = 'PublicKeyCredential' in window;
    this.setState({ webauthAvailable });
  }

  requestChallenge() {
    const challenge$ = this.requestChallengeUseCase.execute();

    const onChallenge = ({ challenge }: Challenge) => {
      this.setState({ challenge });
    };

    challenge$.pipe(take(1)).subscribe(onChallenge);
  }

  loadAuthUser(force = false) {
    if (this.state.user && !force) return;

    const request$ = this.loadAuthUserUseCase.execute();

    const onAuthUser = (user: AuthUser) => {
      const level = new AccountLevel(user);

      this.setState({ user, level });
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

  signOut() {
    const user = null;
    const level = null;
    this.setState({ user, level });
    this.clearAccessToken();
  }
}
