import { Institution, UseCase } from '@devmx/shared-api-interfaces';
import { InstitutionsService } from '../services';

export class FindInstitutionByIDUseCase
  implements UseCase<string, Institution | null>
{
  constructor(private institutionsService: InstitutionsService) {}

  async execute(id: string) {
    return this.institutionsService.findOne(id);
  }
}
