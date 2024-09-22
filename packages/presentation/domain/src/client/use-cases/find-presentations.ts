import { createQueryParams } from '@devmx/shared-util-data';
import { PresentationService } from '../services';
import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<PresentationOut>>
{
  constructor(private presentationService: PresentationService) {}

  execute(params: QueryParams<Presentation>) {
    return this.presentationService.find(createQueryParams(params));
  }
}
