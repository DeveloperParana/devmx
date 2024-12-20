import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindEventsUntilUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventService: EventService) {}

  execute(params: QueryParams<Event>) {
    return this.eventService.findUntil(params);
  }
}

export function provideFindEventsUntilUseCase() {
  return createUseCaseProvider(FindEventsUntilUseCase, [EventService]);
}
