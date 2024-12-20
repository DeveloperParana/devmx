import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindMyEventsUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventService: EventService) {}

  execute(params: QueryParams<Event>) {
    return this.eventService.findMyEvents(params);
  }
}

export function provideFindMyEventsUseCase() {
  return createUseCaseProvider(FindMyEventsUseCase, [EventService]);
}
