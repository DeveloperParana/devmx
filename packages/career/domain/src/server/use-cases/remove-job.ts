import { PersistenceError } from '@devmx/shared-util-errors';
import { Job, UseCase } from '@devmx/shared-api-interfaces';
import { JobsService } from '../services';

export class RemoveJobUseCase implements UseCase<string, Job> {
  constructor(private jobsService: JobsService) {}

  async execute(id: string) {
    const removed = await this.jobsService.remove(id);

    if (!removed) {
      throw new PersistenceError(`Algo deu errado ao remover oferta`);
    }

    return removed;
  }
}
