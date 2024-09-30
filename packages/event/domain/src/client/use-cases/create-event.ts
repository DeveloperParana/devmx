import { UseCase, EventOut } from '@devmx/shared-api-interfaces';
import { CreateEvent } from '../../lib/dtos';
import { EventService } from '../services';

export class CreateEventUseCase implements UseCase<CreateEvent, EventOut> {
  constructor(private eventService: EventService) {}

  execute(data: CreateEvent) {
    return this.eventService.create(data);
  }
}
