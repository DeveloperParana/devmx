import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { EditableEvent, Event } from '@devmx/shared-api-interfaces';
import {
  CreateEventUseCase,
  FindEventByIDUseCase,
  FindEventsUseCase,
  DeleteEventUseCase,
  UpdateEventUseCase,
} from '@devmx/event-domain/client';

export class EventFacade extends EntityFacade<Event> {
  constructor(
    private createEventUseCase: CreateEventUseCase,
    private findEventsUseCase: FindEventsUseCase,
    private findEventByIDUseCase: FindEventByIDUseCase,
    private updateEventUseCase: UpdateEventUseCase,
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

  loadOne(id: string) {
    this.onLoadOne(this.findEventByIDUseCase.execute(id));
  }

  create(data: EditableEvent) {
    this.onCreate(this.createEventUseCase.execute(data));
  }

  update(data: EditableEvent) {
    this.onUpdate(this.updateEventUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteEventUseCase.execute(id));
  }
}

export function provideEventFacade() {
  return createClientProvider(EventFacade, [
    CreateEventUseCase,
    FindEventsUseCase,
    FindEventByIDUseCase,
    UpdateEventUseCase,
    DeleteEventUseCase,
  ]);
}
