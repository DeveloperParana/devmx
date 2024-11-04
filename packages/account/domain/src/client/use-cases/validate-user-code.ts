import { Authentication, UseCase } from '@devmx/shared-api-interfaces';
import { AuthenticationService } from '../services';
import { ValidateUserCode } from '../../lib/dtos';
import { switchMap } from 'rxjs';

export class ValidateUserCodeUseCase
  implements UseCase<ValidateUserCode, Authentication>
{
  constructor(private authenticationService: AuthenticationService) {}

  execute(data: ValidateUserCode) {
    return this.authenticationService.validateUserCode(data).pipe(
      switchMap(({ accessToken }) => {
        localStorage.setItem('accessToken', accessToken);
        return this.authenticationService.load();
      })
    );
  }
}
