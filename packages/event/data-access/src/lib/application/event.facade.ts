import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { CopyEvent, EditableEvent, Event } from '@devmx/shared-api-interfaces';
import { toEventPage, toEventSchema } from '../mappers';
import { filter, map, take, tap } from 'rxjs';
import {
  FindEventsUseCase,
  DeleteEventUseCase,
  CreateEventUseCase,
  UpdateEventUseCase,
  FindEventByIDUseCase,
  FindAllEventsUseCase,
  CopyEventUseCase,
  FindMyEventsUseCase,
  FindEventsUntilUseCase,
} from '@devmx/event-domain/client';

export class EventFacade extends EntityFacade<Event> {
  page$ = this.select((state) => state.selected).pipe(
    filter((event) => !!event),
    map((event) => toEventPage(event))
  );

  schema$ = this.page$.pipe(map((event) => toEventSchema(event)));

  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findMyEventsUseCase: FindMyEventsUseCase,
    private findAllEventsUseCase: FindAllEventsUseCase,
    private findEventsUntilUseCase: FindEventsUntilUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
    private copyEventUseCase: CopyEventUseCase,
    private deleteEventUseCase: DeleteEventUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { title: '', format: '' },
        sort: { date: 'asc' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findEventsUseCase.execute(this.state.params));
  }

  loadAll() {
    this.onLoad(this.findAllEventsUseCase.execute(this.state.params));
  }

  loadUntil() {
    this.onLoad(this.findEventsUntilUseCase.execute(this.state.params));
  }

  loadMyEvents() {
    this.onLoad(this.findMyEventsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findEventByIDUseCase.execute(id));
  }

  create(data: EditableEvent) {
    const request$ = this.createEventUseCase.execute(data);

    const onCreate = (selected: Event) => this.setState({ selected });

    return request$.pipe(take(1), tap(onCreate));
  }

  copy(data: CopyEvent) {
    const request$ = this.copyEventUseCase.execute(data);

    const onUpdate = (selected: Event) => this.setState({ selected });

    return request$.pipe(take(1), tap(onUpdate));
  }

  update(data: EditableEvent) {
    const request$ = this.updateEventUseCase.execute(data);

    const onUpdate = (selected: Event) => this.setState({ selected });

    return request$.pipe(take(1), tap(onUpdate));
  }

  delete(id: string) {
    this.onDelete(this.deleteEventUseCase.execute(id));
  }
}

export function provideEventFacade() {
  return createClientProvider(EventFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindMyEventsUseCase,
    FindAllEventsUseCase,
    FindEventsUntilUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    CopyEventUseCase,
    DeleteEventUseCase,
  ]);
}
