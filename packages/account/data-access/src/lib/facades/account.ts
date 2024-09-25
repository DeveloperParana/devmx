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
  UploadPhotoUseCase,
  FindAccountByUsernameUseCase,
} from '@devmx/account-domain/client';

interface AccountState {
  presentations: Page<PresentationOut>;
  accounts: Page<AccountOut>;
  account: AccountOut | null;
  username: boolean | null;
}

export class AccountFacade extends State<AccountState> {
  presentations$ = this.select((state) => state.presentations);

  accounts$ = this.select((state) => state.accounts);

  account$ = this.select((state) => state.account);

  username$ = this.select((state) => state.username);

  constructor(
    private findAccountByIDUseCase: FindAccountByIDUseCase,
    private findAccountByUsernameUseCase: FindAccountByUsernameUseCase,
    private findAccountPresentationsUseCase: FindAccountPresentationsUseCase,
    private updateAccountUseCase: UpdateAccountUseCase,
    private removeAccountUseCase: RemoveAccountUseCase,
    private changePasswordUseCase: ChangePasswordUseCase,
    private uploadPhotoUseCase: UploadPhotoUseCase
  ) {
    super({
      accounts: { data: [], items: 0, pages: 0 },
      presentations: { data: [], items: 0, pages: 0 },
      account: null,
      username: null,
    });
  }

  loadOne(id: string) {
    const request$ = this.findAccountByIDUseCase.execute(id);

    const onAccount = (account: AccountOut) => {
      this.setState({ account });
    };

    request$.pipe(take(1)).subscribe(onAccount);
  }

  loadOneByUsername(username: string) {
    const request$ = this.findAccountByUsernameUseCase.execute(username);

    const onAccount = (account: AccountOut) => {
      this.setState({ account });
    };

    request$.pipe(take(1)).subscribe(onAccount);
  }

  checkUsername(username: string) {
    this.setState({ username: null });

    const request$ = this.findAccountByUsernameUseCase.execute(username);

    const onUsername = (account: AccountOut) => {
      this.setState({ username: !!account });
    };

    request$.pipe(take(1)).subscribe(onUsername);
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

  uploadPhoto(photo: Blob) {
    const request$ = this.uploadPhotoUseCase.execute(photo);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  remove(id: string) {
    const request$ = this.removeAccountUseCase.execute(id);

    request$.pipe(take(1)).subscribe(() => this.loadOne(id));
  }
}
