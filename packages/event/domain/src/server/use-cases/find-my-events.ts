import { createUseCaseProvider } from '@devmx/shared-util-data/server';
import { EventsService } from '../services';
import {
  Event,
  Page,
  UseCase,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindMyEventsUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventsService: EventsService) {}

  async execute(params: QueryParams<Event>) {
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

    return await this.eventsService.findMyEvents(params);
  }
}

export function provideFindMyEventsUseCase() {
  return createUseCaseProvider(FindMyEventsUseCase, [EventsService]);
}