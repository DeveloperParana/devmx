import { createQueryParams } from '@devmx/shared-util-data';
import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  EventOut,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindEventsUseCase
  implements UseCase<QueryParams<Event>, Page<EventOut>>
{
  constructor(private eventService: EventService) {}

  execute(params: QueryParams<Event>) {
    return this.eventService.find(createQueryParams(params));
  }
}
