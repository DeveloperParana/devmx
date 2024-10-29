import { UpdateEvent, UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class UpdateEventUseCase implements UseCase<UpdateEvent, Event> {
  constructor(private eventService: EventService) {}

  execute(data: UpdateEvent) {
    return this.eventService.update(data.id, data);
  }
}
