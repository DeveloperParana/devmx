import {
  ChangePassword,
  ChangeRoles,
  UpdateAccount,
} from '@devmx/account-domain';
import { State } from '@devmx/shared-data-access';
import { FilterAccount } from '../dtos';
import { take } from 'rxjs';
import {
  Page,
  AccountOut,
  PresentationOut,
  EventOut,
} from '@devmx/shared-api-interfaces';
import {
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindAccountByIDUseCase,
  FindPresentationsByOwnerUseCase,
  ChangePasswordUseCase,
  UploadPhotoUseCase,
  FindAccountByUsernameUseCase,
  FindAccountsUseCase,
  ChangeRolesUseCase,
  FindEventsByOwnerUseCase,
  FindSpeakersUseCase,
  FindLeadersUseCase,
} from '@devmx/account-domain/client';

interface AccountState {
  presentations: Page<PresentationOut>;
  events: Page<EventOut>;
  accounts: Page<AccountOut>;
  speakers: Page<AccountOut>;
  leaders: Page<AccountOut>;
  account: AccountOut | null;
  username: boolean | null;
  filter: FilterAccount;
}

export class AccountFacade extends State<AccountState> {
  presentations$ = this.select((state) => state.presentations);

  events$ = this.select((state) => state.events);

  speakers$ = this.select((state) => state.speakers);

  leaders$ = this.select((state) => state.leaders);

  accounts$ = this.select((state) => state.accounts);

  account$ = this.select((state) => state.account);

  username$ = this.select((state) => state.username);

  constructor(
    private findAccountsUseCase: FindAccountsUseCase,
    private findAccountByIDUseCase: FindAccountByIDUseCase,
    private findAccountByUsernameUseCase: FindAccountByUsernameUseCase,
    private findPresentationsByOwnerUseCase: FindPresentationsByOwnerUseCase,
    private findEventsByOwnerUseCase: FindEventsByOwnerUseCase,
    private updateAccountUseCase: UpdateAccountUseCase,
    private removeAccountUseCase: RemoveAccountUseCase,
    private changePasswordUseCase: ChangePasswordUseCase,
    private changeRolesUseCase: ChangeRolesUseCase,
    private uploadPhotoUseCase: UploadPhotoUseCase,
    private findSpeakersUseCase: FindSpeakersUseCase,
    private findLeadersUseCase: FindLeadersUseCase
  ) {
    super({
      accounts: { data: [], items: 0, pages: 0 },
      speakers: { data: [], items: 0, pages: 0 },
      leaders: { data: [], items: 0, pages: 0 },
      presentations: { data: [], items: 0, pages: 0 },
      events: { data: [], items: 0, pages: 0 },
      filter: { name: '', username: '' },
      account: null,
      username: null,
    });
  }

  setFilter(filter: FilterAccount) {
    this.setState({ filter });
  }

  clearFilter() {
    this.setState({ filter: { name: '', username: '' } });
  }

  load(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findAccountsUseCase.execute(params);

    const onAccounts = (accounts: Page<AccountOut>) => {
      this.setState({ accounts });
    };

    request$.pipe(take(1)).subscribe(onAccounts);
  }

  loadSpeakers(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findSpeakersUseCase.execute(params);

    const onSpeakers = (speakers: Page<AccountOut>) => {
      this.setState({ speakers });
    };

    request$.pipe(take(1)).subscribe(onSpeakers);
  }

  loadLeaders(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findLeadersUseCase.execute(params);

    const onLeaders = (leaders: Page<AccountOut>) => {
      this.setState({ leaders });
    };

    request$.pipe(take(1)).subscribe(onLeaders);
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
    const request$ = this.findPresentationsByOwnerUseCase.execute({
      page,
      size,
    });

    const onPresentations = (presentations: Page<PresentationOut>) => {
      this.setState({ presentations });
    };

    request$.pipe(take(1)).subscribe(onPresentations);
  }

  loadEvents(page = 0, size = 10) {
    const request$ = this.findEventsByOwnerUseCase.execute({
      page,
      size,
    });

    const onEvents = (events: Page<EventOut>) => {
      this.setState({ events });
    };

    request$.pipe(take(1)).subscribe(onEvents);
  }

  update(data: UpdateAccount) {
    const request$ = this.updateAccountUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.loadOne(data.id));
  }

  changePassword(data: ChangePassword) {
    const request$ = this.changePasswordUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.loadOne(data.id));
  }

  changeRoles(data: ChangeRoles) {
    const request$ = this.changeRolesUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load());
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
