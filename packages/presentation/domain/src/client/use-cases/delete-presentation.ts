import { UseCase, Presentation } from '@devmx/shared-api-interfaces';
import { PresentationService } from '../services';

export class DeletePresentationUseCase
  implements UseCase<string, Presentation>
{
  constructor(private eventService: PresentationService) {}

  execute(id: string) {
    return this.eventService.delete(id);
  }
}
