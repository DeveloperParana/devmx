import { CreateEvent, UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class CreateEventUseCase implements UseCase<CreateEvent, Event> {
  constructor(private eventService: EventService) {}

  execute(data: CreateEvent) {
    return this.eventService.create(data);
  }
}
