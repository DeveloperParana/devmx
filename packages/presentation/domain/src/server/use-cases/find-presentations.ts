import { PresentationsService } from '../services';
import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
  QueryFilter,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<Presentation>>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(params: QueryParams<Presentation>) {
    const filter: QueryFilter<Presentation> = {};

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

      if (params.filter.description) {
        filter.description = new RegExp(params.filter.description, 'i');
      } else {
        delete params.filter.description;
      }
    }

    params.filter = { ...params.filter, ...filter };

    return await this.presentationsService.find(params);
  }
}
