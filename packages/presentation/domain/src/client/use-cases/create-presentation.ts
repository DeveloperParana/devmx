import {
  UseCase,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import { PresentationService } from '../services';

export class CreatePresentationUseCase
  implements UseCase<Presentation, PresentationOut>
{
  constructor(private presentationService: PresentationService) {}

  execute(data: Presentation) {
    return this.presentationService.create(data);
  }
}
