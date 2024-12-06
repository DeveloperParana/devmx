import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { InstitutionService } from '../services';
import {
  UseCase,
  Institution,
  EditableInstitution,
} from '@devmx/shared-api-interfaces';

export class CreateInstitutionUseCase
  implements UseCase<EditableInstitution, Institution>
{
  constructor(private institutionService: InstitutionService) {}

  execute(data: EditableInstitution) {
    return this.institutionService.create(data);
  }
}

export function provideCreateInstitutionUseCase() {
  return createUseCaseProvider(CreateInstitutionUseCase, [InstitutionService]);
}
