import { createClientProvider } from '@devmx/shared-data-access';
import { Authentication } from '@devmx/shared-api-interfaces';
import { freeze, State } from '@devmx/shared-util-data';
import { take } from 'rxjs';
import {
  CreateUser,
  SendUserCode,
  ValidateUserCode,
} from '@devmx/account-domain';
import {
  CreateUserUseCase,
  SendUserCodeUseCase,
  ValidateUserCodeUseCase,
  LoadAuthenticationUseCase,
} from '@devmx/account-domain/client';

interface AuthenticationState {
  auth: Authentication | null;
  message: string | null;
  loading: boolean;
  sended: boolean;
}

const initialState = freeze({
  auth: null,
  loading: false,
  message: null,
  sended: false,
});

export class AuthenticationFacade extends State<AuthenticationState> {
  auth$ = this.select((state) => state.auth);
  message$ = this.select((state) => state.message);
  loading$ = this.select((state) => state.loading);
  connected$ = this.select(() => !!this.accessToken);

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  constructor(
    private createUserUseCase: CreateUserUseCase,
    private sendUserCodeUseCase: SendUserCodeUseCase,
    private validateUserCodeUseCase: ValidateUserCodeUseCase,
    private loadAuthenticationUseCase: LoadAuthenticationUseCase
  ) {
    super(initialState);
  }

  load() {
    const request$ = this.loadAuthenticationUseCase.execute().pipe(take(1));
    request$.subscribe((auth) => this.setState({ auth }));
  }

  sendUserCode(data: SendUserCode) {
    this.setState({ loading: true });

    const request$ = this.sendUserCodeUseCase.execute(data).pipe(take(1));
    request$.subscribe(({ message }) => {
      this.setState({ sended: true, loading: false, message });
    });
  }

  validateUserCode(data: ValidateUserCode) {
    this.setState({ loading: true });

    const request$ = this.validateUserCodeUseCase.execute(data).pipe(take(1));
    request$.subscribe(() => this.setState({ loading: false }));
  }

  createUser(data: CreateUser) {
    this.setState({ loading: true });

    const request$ = this.createUserUseCase.execute(data);
    request$.pipe(take(1)).subscribe();

    return request$;
  }

  signOut() {
    this.setState(initialState);
    localStorage.removeItem('accessToken');
  }
}

export function provideAuthenticationFacade() {
  return createClientProvider(AuthenticationFacade, [
    CreateUserUseCase,
    SendUserCodeUseCase,
    ValidateUserCodeUseCase,
    LoadAuthenticationUseCase,
  ]);
}
