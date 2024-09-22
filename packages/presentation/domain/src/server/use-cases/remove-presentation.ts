import { Presentation, UseCase } from '@devmx/shared-api-interfaces';
import { PersistenceError } from '@devmx/shared-util-errors';
import { PresentationsService } from '../services';

export class RemovePresentationUseCase
  implements UseCase<string, Presentation>
{
  constructor(private presentationsService: PresentationsService) {}

  async execute(id: string) {
    const removed = await this.presentationsService.remove(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover apresentação`);
    }

    return removed;
  }
}
