import { PersistenceError } from '@devmx/shared-util-errors';
import { JobOpening, UseCase } from '@devmx/shared-api-interfaces';
import { JobOpeningsService } from '../services';

export class DeleteJobOpeningUseCase implements UseCase<string, JobOpening> {
  constructor(private jobOpeningsService: JobOpeningsService) {}

  async execute(id: string) {
    const deleted = await this.jobOpeningsService.delete(id);

    if (!deleted) {
      throw new PersistenceError(`Algo deu errado ao apagar vaga`);
    }

    return deleted;
  }
}
