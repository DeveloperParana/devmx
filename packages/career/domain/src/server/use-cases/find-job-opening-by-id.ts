import { JobOpening, UseCase } from '@devmx/shared-api-interfaces';
import { NotFoundError } from '@devmx/shared-util-errors';
import { JobOpeningsService } from '../services';

export class FindJobOpeningByIDUseCase implements UseCase<string, JobOpening> {
  constructor(private jobOpeningsService: JobOpeningsService) {}

  async execute(id: string) {
    const jobOpening = await this.jobOpeningsService.findOne(id);

    if (!jobOpening) {
      throw new NotFoundError(`Vaga não encontrada`);
    }

    return jobOpening;
  }
}
