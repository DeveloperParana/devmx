import {
  Page,
  UseCase,
  QueryParams,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import { AccountService } from '../services';
import { createQueryParams } from '@devmx/shared-util-data';
import { of } from 'rxjs';
import { PresentationService } from '@devmx/presentation-domain/client';

export class FindPresentationsByOwnerUseCase
  implements UseCase<QueryParams<PresentationOut>, Page<PresentationOut>>
{
  constructor(private accountService: AccountService) {}
  // constructor(private presentationService: PresentationService) {}

  execute(params: QueryParams<PresentationOut>) {
    // return of({ data: [], items: 0, pages: 1 });
    // return this.presentationService.find(createQueryParams(params))
    return this.accountService.findPresentations(createQueryParams(params));
  }
}
