import { Presentation, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationsService } from '../services';
import { CreatePresentation } from '../dtos';

export class CreatePresentationUseCase
  implements UseCase<CreatePresentation, Presentation>
{
  constructor(private readonly presentationsService: PresentationsService) {}

  execute(data: CreatePresentation) {
    return this.presentationsService.create(data);
  }
}
