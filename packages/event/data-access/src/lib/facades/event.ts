import { CreateEvent, UpdateEvent } from '@devmx/event-domain';
import { EventOut, Page } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { FilterEvent } from '../dtos';
import { take } from 'rxjs';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  RemoveEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/client';

interface EventState {
  events: Page<EventOut>;
  event: EventOut | null;
  filter: FilterEvent;
}

export class EventFacade extends State<EventState> {
  events$ = this.select((state) => state.events);

  event$ = this.select((state) => state.event);

  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private removeEventUseCase: RemoveEventUseCase
  ) {
    super({
      events: { data: [], items: 0, pages: 0 },
      filter: { title: '', format: '' },
      event: null,
    });
  }

  setFilter(filter: FilterEvent) {
    this.setState({ filter });
  }

  clearFilter() {
    this.setState({ filter: { format: '', title: '' } });
  }

  load(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findEventsUseCase.execute(params);

    const onEvents = (events: Page<EventOut>) => {
      this.setState({ events });
    };

    request$.pipe(take(1)).subscribe(onEvents);
  }

  loadOne(id: string) {
    const request$ = this.findEventByIDUseCase.execute(id);

    const onEvent = (event: EventOut) => {
      this.setState({ event });
    };

    request$.pipe(take(1)).subscribe(onEvent);
  }

  create(data: CreateEvent) {
    const request$ = this.createEventUseCase.execute(data);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  update(data: UpdateEvent) {
    const request$ = this.updateEventUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  remove(id: string) {
    const request$ = this.removeEventUseCase.execute(id);

    request$.pipe(take(1)).subscribe(() => this.load());
  }
}
