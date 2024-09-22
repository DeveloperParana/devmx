import { UseCase, PresentationOut } from '@devmx/shared-api-interfaces';
import { PresentationService } from '../services';

export class FindPresentationByIDUseCase
  implements UseCase<string, PresentationOut>
{
  constructor(private presentationService: PresentationService) {}

  execute(id: string) {
    return this.presentationService.findOne(id);
  }
}
