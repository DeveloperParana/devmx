import { UseCase, EventOut } from '@devmx/shared-api-interfaces';
import { EventService } from '../services';

export class RemoveEventUseCase
  implements UseCase<string, EventOut>
{
  constructor(private eventService: EventService) {}

  execute(id: string) {
    return this.eventService.remove(id);
  }
}
