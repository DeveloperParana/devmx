import { AuthUser, SignUp, UseCase } from '@devmx/shared-api-interfaces';
import { AuthService } from '../services';
import { switchMap } from 'rxjs';

export class SignUpUseCase implements UseCase<SignUp, AuthUser> {
  constructor(private authService: AuthService) {}

  execute(data: SignUp) {
    return this.authService.signUp(data).pipe(
      switchMap(({ accessToken }) => {
        localStorage.setItem('accessToken', accessToken);
        return this.authService.auth();
      })
    );
  }
}
