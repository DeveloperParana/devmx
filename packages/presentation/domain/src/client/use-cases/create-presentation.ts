import { PresentationService } from '../services';
import {
  UseCase,
  PresentationOut,
  CreatePresentation,
} from '@devmx/shared-api-interfaces';

export class CreatePresentationUseCase
  implements UseCase<CreatePresentation, PresentationOut>
{
  constructor(private presentationService: PresentationService) {}

  execute(data: CreatePresentation) {
    return this.presentationService.create(data);
  }
}
