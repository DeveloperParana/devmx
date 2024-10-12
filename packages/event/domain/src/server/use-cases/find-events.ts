import { EventsService } from '../services';
import {
  Event,
  Page,
  UseCase,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindEventsUseCase
  implements UseCase<QueryParams<Event>, Page<Event>>
{
  constructor(private eventsService: EventsService) {}

  async execute(params: QueryParams<Event>) {
    const filter: QueryFilter<Event> = {};

    if (params.filter) {
      if (params.filter.format) {
        filter.format = new RegExp(params.filter.format, 'i');
      } else {
        delete params.filter.format;
      }

      if (params.filter.title) {
        filter.title = new RegExp(params.filter.title, 'i');
      } else {
        delete params.filter.title;
      }

      if (params.filter.city) {
        filter.city = params.filter.city;
      } else {
        delete params.filter.city;
      }

      if (params.filter.description) {
        filter.description = new RegExp(params.filter.description, 'i');
      } else {
        delete params.filter.description;
      }
    }

    params.filter = { ...params.filter, ...filter };

    return await this.eventsService.find(params);
  }
}
