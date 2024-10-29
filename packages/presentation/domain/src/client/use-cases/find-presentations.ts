import { PresentationService } from '../services';
import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<Presentation>>
{
  constructor(private presentationService: PresentationService) {}

  execute(params: QueryParams<Presentation>) {
    return this.presentationService.find(params);
  }
}
