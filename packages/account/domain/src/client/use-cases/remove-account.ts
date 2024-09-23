import { AccountOut, UseCase } from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';
import { tap } from 'rxjs';

export class RemoveAccountUseCase implements UseCase<string, AccountOut> {
  constructor(private accountService: AccountService) {}

  execute(id: string) {
    return this.accountService.remove(id).pipe(
      tap(() => {
        localStorage.removeItem('accessToken');
      })
    );
  }
}
