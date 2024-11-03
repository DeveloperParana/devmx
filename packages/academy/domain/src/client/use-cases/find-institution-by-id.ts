import { Institution, UseCase } from '@devmx/shared-api-interfaces';
import { InstitutionService } from '../services';

export class FindInstitutionByIDUseCase
  implements UseCase<string, Institution | null>
{
  constructor(private institutionService: InstitutionService) {}

  execute(id: string) {
    return this.institutionService.findOne(id);
  }
}
