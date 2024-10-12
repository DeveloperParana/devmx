import { UploadCover } from '@devmx/shared-api-interfaces/client';
import { State } from '@devmx/shared-data-access';
import { FilterEvent } from '../dtos';
import { take } from 'rxjs';
import {
  City,
  Page,
  Event,
  EventOut,
  AccountRef,
  CreateEvent,
  UpdateEvent,
  PresentationRef,
  QueryLocation,
} from '@devmx/shared-api-interfaces';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
  UploadCoverUseCase,
} from '@devmx/event-domain/client';

interface EventState {
  events: Page<EventOut>;
  event: EventOut | null;
  filter: FilterEvent;
  location?: QueryLocation;
}

export class EventFacade extends State<EventState> {
  events$ = this.select((state) => state.events);

  event$ = this.select((state) => state.event);

  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private removeEventUseCase: RemoveEventUseCase,
    private uploadCoverUseCase: UploadCoverUseCase // private findCitiesByLocationUseCase: FindCitiesByLocationUseCase,
  ) {
    super({
      events: { data: [], items: 0, pages: 0 },
      filter: { title: '', format: '', city: '' },
      event: null,
    });
  }

  setFilter(filter: FilterEvent) {
    this.setState({ filter });
  }

  clearFilter() {
    this.setState({ filter: { format: '', title: '', city: '' } });
  }

  setLocation(location: QueryLocation) {
    this.setState({ location });
  }

  clearLocation() {
    this.setState({ location: undefined });
  }

  load(page = 0, size = 10) {
    const filter = this.state.filter;

    const location = this.state.location;

    const params = { filter, page, size, location };

    const request$ = this.findEventsUseCase.execute(params);

    const onEvents = (events: Page<EventOut>) => {
      this.setState({ events });
    };

    request$.pipe(take(1)).subscribe(onEvents);
  }

  loadOne(id: string) {
    this.setState({ event: null });

    const request$ = this.findEventByIDUseCase.execute(id);

    const onEvent = (event: EventOut) => {
      this.setState({ event });
    };

    request$.pipe(take(1)).subscribe(onEvent);
  }

  create(data: CreateEvent) {
    const city = this.#cityIsCity(data.city) ? data.city.id : data.city;

    data.leaders ??= [];

    const leaders: string[] = [];

    for (const leader of data.leaders) {
      if (this.#leaderIsAccountRef(leader)) {
        leaders.push(leader.id);
      }
    }

    const value = { ...data, city, leaders };
    const request$ = this.createEventUseCase.execute(value);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  update(data: Event) {
    const city = this.#cityIsCity(data.city) ? data.city.id : data.city;

    data.leaders ??= [];

    const leaders: string[] = [];

    for (const leader of data.leaders) {
      if (this.#leaderIsAccountRef(leader)) {
        leaders.push(leader.id);
      }
    }

    data.presentations ??= [];

    const presentations: string[] = [];

    for (const presentation of data.presentations) {
      if (this.#isPresentationRef(presentation)) {
        presentations.push(presentation.id);
      }
    }

    const value = { ...data, city, leaders, presentations } as UpdateEvent;

    const request$ = this.updateEventUseCase.execute(value);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  uploadCover(data: UploadCover) {
    const request$ = this.uploadCoverUseCase.execute(data);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  remove(id: string) {
    return this.removeEventUseCase.execute(id).pipe(take(1));
  }

  #isPresentationRef(presentation: unknown): presentation is PresentationRef {
    return typeof presentation === 'object';
  }

  #leaderIsAccountRef(account: unknown): account is AccountRef {
    return typeof account === 'object';
  }

  #cityIsCity(city: unknown): city is City {
    return typeof city === 'object';
  }
}
