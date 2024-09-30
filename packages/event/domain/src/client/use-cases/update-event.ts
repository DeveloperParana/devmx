import { UseCase, EventOut } from '@devmx/shared-api-interfaces';
import { UpdateEvent } from '../../lib/dtos';
import { EventService } from '../services';

export class UpdateEventUseCase implements UseCase<UpdateEvent, EventOut> {
  constructor(private eventService: EventService) {}

  execute(data: UpdateEvent) {
    return this.eventService.update(data.id, data);
  }
}
