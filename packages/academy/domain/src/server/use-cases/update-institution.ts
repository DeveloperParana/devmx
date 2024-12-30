import { InstitutionsService } from '../services';
import {
  UseCase,
  Institution,
  EditableInstitution,
} from '@devmx/shared-api-interfaces';

export class UpdateInstitutionUseCase
  implements UseCase<EditableInstitution, Institution | null>
{
  constructor(private institutionsService: InstitutionsService) {}

  async execute(data: EditableInstitution) {
    return this.institutionsService.update(data.id, data);
  }
}
