import { InstitutionService } from '../services';
import {
  UseCase,
  Institution,
  EditableInstitution,
} from '@devmx/shared-api-interfaces';

export class UpdateInstitutionUseCase
  implements UseCase<EditableInstitution, Institution>
{
  constructor(private institutionService: InstitutionService) {}

  execute(data: EditableInstitution) {
    return this.institutionService.update(data.id, data);
  }
}
