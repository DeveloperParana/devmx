import { PresentationService } from '../services';
import {
  UseCase,
  Presentation,
  EditablePresentation,
} from '@devmx/shared-api-interfaces';

export class UpdatePresentationUseCase
  implements UseCase<EditablePresentation, Presentation>
{
  constructor(private presentationService: PresentationService) {}

  execute(data: EditablePresentation) {
    return this.presentationService.update(data.id, data);
  }
}
