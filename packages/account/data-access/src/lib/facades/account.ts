import { FindPresentationsUseCase } from '@devmx/presentation-domain/client';
import { FilterEvent } from '@devmx/event-data-access';
import { State } from '@devmx/shared-data-access';
import { FilterAccount } from '../dtos';
import { take } from 'rxjs';
import {
  ChangeRoles,
  UpdateAccount,
  ChangePassword,
} from '@devmx/account-domain';
import {
  Page,
  JobOut,
  EventOut,
  AccountOut,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import {
  RemoveAccountUseCase,
  UpdateAccountUseCase,
  FindAccountByIDUseCase,
  ChangePasswordUseCase,
  UploadPhotoUseCase,
  FindAccountByUsernameUseCase,
  FindAccountsUseCase,
  ChangeRolesUseCase,
  FindEventsByOwnerUseCase,
  FindSpeakersUseCase,
  FindLeadersUseCase,
  FindJobsByOwnerUseCase,
} from '@devmx/account-domain/client';
import { FilterJob } from '@devmx/career-data-access';

interface AccountFilters {
  event: FilterEvent;
  job: FilterJob;
}

interface AccountState {
  events: Page<EventOut>;
  accounts: Page<AccountOut>;
  speakers: Page<AccountOut>;
  leaders: Page<AccountOut>;
  presentations: Page<PresentationOut>;
  jobs: Page<JobOut>;
  account: AccountOut | null;
  username: boolean | null;
  filter: FilterAccount;
  filters: AccountFilters;
}

export class AccountFacade extends State<AccountState> {
  presentations$ = this.select((state) => state.presentations);

  jobs$ = this.select((state) => state.jobs);

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
    // private findPresentationsByOwnerUseCase: FindPresentationsByOwnerUseCase,
    private findPresentationsByOwnerUseCase: FindPresentationsUseCase,
    private findJobsByOwnerUseCase: FindJobsByOwnerUseCase,
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
      jobs: { data: [], items: 0, pages: 0 },
      events: { data: [], items: 0, pages: 0 },
      filter: { name: '', username: '' },
      filters: {
        event: { title: '', format: '' },
        job: { mode: '', contract: '', experience: '' },
      },
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

  setEventFilter(event: FilterEvent) {
    const { filters } = this.state;
    filters.event = event;
    this.setState({ filters });
  }

  clearEventFilter() {
    const { filters } = this.state;
    filters.event = { title: '', format: '' };
    this.setState({ filters });
  }

  setJobFilter(job: FilterJob) {
    const { filters } = this.state;
    filters.job = job;
    this.setState({ filters });
  }

  clearJobFilter() {
    const { filters } = this.state;
    filters.job = { mode: '', contract: '', experience: '' };
    this.setState({ filters });
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

  loadPresentations(page = 0, size = 10, owner?: string) {
    const request$ = this.findPresentationsByOwnerUseCase.execute({
      page,
      size,
      filter: { owner },
    });

    const onPresentations = (presentations: Page<PresentationOut>) => {
      this.setState({ presentations });
    };

    request$.pipe(take(1)).subscribe(onPresentations);
  }

  loadJobs(page = 0, size = 10) {
    const request$ = this.findJobsByOwnerUseCase.execute({
      page,
      size,
    });

    const onJobs = (jobs: Page<JobOut>) => {
      this.setState({ jobs });
    };

    request$.pipe(take(1)).subscribe(onJobs);
  }

  loadEvents(page = 0, size = 10) {
    const request$ = this.findEventsByOwnerUseCase.execute({
      page,
      size,
    });

    const onEvents = (events: Page<EventOut>) => {
      console.log(events);

      this.setState({ events });
    };

    request$.pipe(take(1)).subscribe(onEvents);
  }

  update(data: UpdateAccount) {
    if (data.city && typeof data.city === 'object') {
      data.city = data.city['id'];
    }
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
