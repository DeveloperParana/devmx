import { FindAboutAccountUseCase } from '@devmx/account-domain/client';
import { AccountOut } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';

interface AboutState {
  account: AccountOut | null;
}

export class AboutFacade extends State<AboutState> {
  account$ = this.select((state) => state.account);

  constructor(private findAboutAccountUseCase: FindAboutAccountUseCase) {
    super({ account: null });
  }

  findAccount(username: string) {
    this.setState({ account: null });

    const account$ = this.findAboutAccountUseCase.execute(username);

    account$.pipe(take(1)).subscribe((account) => this.setState({ account }));
  }
}
