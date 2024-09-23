import { PresentationsService } from '../services';
import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<Presentation>>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(params: QueryParams<Presentation>) {
    return await this.presentationsService.find(params);
  }
}
