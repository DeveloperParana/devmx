import { Presentation, Findable, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { PresentationsService } from '../services';

export class UpdatePresentationUseCase
  implements UseCase<Findable<Presentation>, Presentation>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(data: Findable<Presentation>) {
    const presentation = await this.presentationsService.findOne(data.id);

    if (!presentation) {
      throw new NotFoundError(`Apresentação não encontrada`);
    }

    const updated = await this.presentationsService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados da apresentação`
      );
    }

    return updated;
  }
}
