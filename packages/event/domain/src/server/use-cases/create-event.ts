import { Event, UseCase } from '@devmx/shared-api-interfaces';
import { EventsService } from '../services';
import { CreateEvent } from '../dtos';

export class CreateEventUseCase implements UseCase<CreateEvent, Event> {
  constructor(private readonly eventsService: EventsService) {}

  execute(data: CreateEvent) {
    return this.eventsService.create(data);
  }
}
