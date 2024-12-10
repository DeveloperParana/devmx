import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindAllEventsUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventService: EventService) {}

  execute(params: QueryParams<Event>) {
    return this.eventService.findAll(params);
  }
}

export function provideFindAllEventsUseCase() {
  return createUseCaseProvider(FindAllEventsUseCase, [EventService]);
}
