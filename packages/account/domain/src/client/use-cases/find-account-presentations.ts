import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';
import { createQueryParams } from '@devmx/shared-util-data';

export class FindAccountPresentationsUseCase
  implements UseCase<QueryParams<Presentation>, Page<PresentationOut>>
{
  constructor(private accountService: AccountService) {}

  execute(params: QueryParams<Presentation>) {
    return this.accountService.findPresentations(createQueryParams(params));
  }
}
