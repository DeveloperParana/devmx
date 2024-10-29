import { Presentation, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { PresentationsService } from '../services';

export class DeletePresentationUseCase
  implements UseCase<string, Presentation>
{
  constructor(private eventsService: PresentationsService) {}

  async execute(id: string) {
    const removed = await this.eventsService.delete(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover evento`);
    }

    return removed;
  }
}
