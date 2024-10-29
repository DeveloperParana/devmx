import {
  UseCase,
  Presentation,
  EditablePresentation,
} from '@devmx/shared-api-interfaces';
import { PresentationsService } from '../services';

export class CreatePresentationUseCase
  implements UseCase<EditablePresentation, Presentation>
{
  constructor(private readonly presentationsService: PresentationsService) {}

  execute(data: EditablePresentation) {
    return this.presentationsService.create(data);
  }
}
