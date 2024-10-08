import { CreateEvent, UseCase, EventOut } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class CreateEventUseCase implements UseCase<CreateEvent, EventOut> {
  constructor(private eventService: EventService) {}

  execute(data: CreateEvent) {
    return this.eventService.create(data);
  }
}
