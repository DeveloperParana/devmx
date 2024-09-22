import { AuthUser, SignIn, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../services';
import { switchMap } from 'rxjs';

export class SignInUseCase implements UseCase<SignIn, AuthUser> {
  constructor(private authService: AuthService) {}

  execute(data: SignIn) {
    return this.authService.signIn(data).pipe(
      switchMap(({ accessToken }) => {
        localStorage.setItem('accessToken', accessToken);
        return this.authService.auth();
      })
    );
  }
}
