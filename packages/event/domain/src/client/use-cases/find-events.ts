import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindEventsUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventService: EventService) {}

  execute(params: QueryParams<Event>) {
    return this.eventService.find(params);
  }
}
