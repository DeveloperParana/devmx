import { Presentation, UseCase } from '@devmx/shared-api-interfaces';
import { PresentationsService } from '../services';
import { NotFoundError } from '@devmx/shared-util-errors';

export class FindPresentationByIDUseCase
  implements UseCase<string, Presentation>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(id: string) {
    const presentation = await this.presentationsService.findOne(id);

    if (!presentation) {
      throw new NotFoundError(`Apresentação não encontrada`);
    }

    return presentation;
  }
}
