import { InstitutionsService } from '../services';
import {
  UseCase,
  Institution,
  EditableInstitution,
} from '@devmx/shared-api-interfaces';

export class CreateInstitutionUseCase
  implements UseCase<EditableInstitution, Institution>
{
  constructor(private institutionsService: InstitutionsService) {}

  execute(data: EditableInstitution) {
    return this.institutionsService.create(data);
  }
}
