import { createUseCaseProvider } from '@devmx/shared-util-data/client';
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

export function provideUpdateInstitutionUseCase() {
  return createUseCaseProvider(UpdateInstitutionUseCase, [InstitutionService]);
}
