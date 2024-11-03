import { Institution, UseCase } from '@devmx/shared-api-interfaces';
import { InstitutionsService } from '../services';

export class DeleteInstitutionUseCase implements UseCase<string, Institution> {
  constructor(private institutionsService: InstitutionsService) {}

  async execute(id: string) {
    return this.institutionsService.delete(id);
  }
}
