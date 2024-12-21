import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { EventsService } from '../services';
import {
  Page,
  Event,
  UseCase,
  QueryParamsDateRange,
} from '@devmx/shared-api-interfaces';

export class FindEventsDateRangeUseCase
  implements UseCase<QueryParamsDateRange<Event>, Page<Event>>
{
  constructor(private eventsService: EventsService) {}

  async execute(params: QueryParamsDateRange<Event>) {
    if (params.filter) {
      if (params.filter.format) {
        params.filter.format = new RegExp(params.filter.format, 'i');
      } else {
        delete params.filter.format;
      }

      if (params.filter.title) {
        params.filter.title = new RegExp(params.filter.title, 'i');
      } else {
        delete params.filter.title;
      }

      if (params.filter.city) {
        params.filter.city = params.filter.city.toString();
      } else {
        delete params.filter.city;
      }

      if (params.filter.description) {
        params.filter.description = new RegExp(params.filter.description, 'i');
      } else {
        delete params.filter.description;
      }
    }

    return await this.eventsService.findDateRange(params);
  }
}

export function provideFindEventsDateRangeUseCase() {
  return createUseCaseProvider(FindEventsDateRangeUseCase, [EventsService]);
}
