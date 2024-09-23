import { PresentationsService } from '@devmx/presentation-domain/server';
import { QueryByAccountParams } from '../dtos';
import {
  Page,
  UseCase,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class FindAccountPresentationsUseCase
  implements UseCase<QueryByAccountParams<PresentationOut>, Page<Presentation>>
{
  constructor(private presentationsService: PresentationsService) {}

  execute({ account, ...params }: QueryByAccountParams<PresentationOut>) {
    return this.presentationsService.findByAccount(account, params);
  }
}
