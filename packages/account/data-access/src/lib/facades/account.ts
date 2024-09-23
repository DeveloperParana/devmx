import { ChangePassword, UpdateAccount } from '@devmx/account-domain';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  Page,
  AccountOut,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import {
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindAccountByIDUseCase,
  FindAccountPresentationsUseCase,
  ChangePasswordUseCase,
} from '@devmx/account-domain/client';

interface AccountState {
  presentations: Page<PresentationOut>;
  accounts: Page<AccountOut>;
  account: AccountOut | null;
}

export class AccountFacade extends State<AccountState> {
  presentations$ = this.select((state) => state.presentations);

  accounts$ = this.select((state) => state.accounts);

  account$ = this.select((state) => state.account);

  constructor(
    private findAccountByIDUseCase: FindAccountByIDUseCase,
    private findAccountPresentationsUseCase: FindAccountPresentationsUseCase,
    private updateAccountUseCase: UpdateAccountUseCase,
    private removeAccountUseCase: RemoveAccountUseCase,
    private changePasswordUseCase: ChangePasswordUseCase
  ) {
    super({
      accounts: { data: [], items: 0, pages: 0 },
      presentations: { data: [], items: 0, pages: 0 },
      account: null,
    });
  }

  loadOne(id: string) {
    const request$ = this.findAccountByIDUseCase.execute(id);

    const onPresentation = (account: AccountOut) => {
      this.setState({ account });
    };

    request$.pipe(take(1)).subscribe(onPresentation);
  }

  loadPresentations(page = 0, size = 10) {
    const request$ = this.findAccountPresentationsUseCase.execute({
      page,
      size,
    });

    const onPresentations = (presentations: Page<PresentationOut>) => {
      this.setState({ presentations });
    };

    request$.pipe(take(1)).subscribe(onPresentations);
  }

  update(data: UpdateAccount) {
    const request$ = this.updateAccountUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.loadOne(data.id));
  }

  changePassword(data: ChangePassword) {
    const request$ = this.changePasswordUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.loadOne(data.id));
  }

  remove(id: string) {
    const request$ = this.removeAccountUseCase.execute(id);

    request$.pipe(take(1)).subscribe(() => this.loadOne(id));
  }
}
