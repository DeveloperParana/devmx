import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { EventService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParams,
  QueryParamsDateRange,
} from '@devmx/shared-api-interfaces';

export class FindEventsDateRangeUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventService: EventService) {}

  execute({ start, end, ...params }: QueryParamsDateRange<Event>) {
    return this.eventService.findDateRange(start, end, params);
  }
}

export function provideFindEventsDateRangeUseCase() {
  return createUseCaseProvider(FindEventsDateRangeUseCase, [EventService]);
}
