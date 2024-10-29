import { PresentationService } from '../services';
import {
  UseCase,
  Presentation,
  CreatePresentation,
} from '@devmx/shared-api-interfaces';

export class CreatePresentationUseCase
  implements UseCase<CreatePresentation, Presentation>
{
  constructor(private presentationService: PresentationService) {}

  execute(data: CreatePresentation) {
    return this.presentationService.create(data);
  }
}
