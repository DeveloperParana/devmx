import { PresentationsService } from '@devmx/presentation-domain/server';
import { QueryByOwnerParams } from '../dtos';
import {
  Page,
  UseCase,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';

export class FindPresentationsByOwnerUseCase
  implements UseCase<QueryByOwnerParams<PresentationOut>, Page<Presentation>>
{
  constructor(private presentationsService: PresentationsService) {}

  execute({ owner, ...params }: QueryByOwnerParams<PresentationOut>) {
    return this.presentationsService.findByOwner(owner, params);
  }
}
