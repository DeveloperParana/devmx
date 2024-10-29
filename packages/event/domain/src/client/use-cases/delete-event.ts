import { UseCase, Event } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class DeleteEventUseCase implements UseCase<string, Event> {
  constructor(private eventService: EventService) {}

  execute(id: string) {
    return this.eventService.delete(id);
  }
}
