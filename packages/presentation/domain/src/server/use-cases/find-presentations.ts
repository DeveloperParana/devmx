import { PresentationsService } from '../services';
import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<Presentation>>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(params: QueryParams<PresentationOut>) {
    if (params.filter) {
      if (params.filter.format) {
        params.filter.format = new RegExp(params.filter.format, 'i');
      } else {
        delete params.filter.format;
      }

      if (params.filter.owner) {
        params.filter.owner = params.filter.owner + '';
      } else {
        delete params.filter.title;
      }

      if (params.filter.title) {
        params.filter.title = new RegExp(params.filter.title, 'i');
      } else {
        delete params.filter.title;
      }

      if (params.filter.description) {
        params.filter.description = new RegExp(params.filter.description, 'i');
      } else {
        delete params.filter.description;
      }
    }

    return await this.presentationsService.find(params);
  }
}
