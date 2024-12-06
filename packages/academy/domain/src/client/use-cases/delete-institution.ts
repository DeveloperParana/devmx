import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { Institution, UseCase } from '@devmx/shared-api-interfaces';
import { InstitutionService } from '../services';

export class DeleteInstitutionUseCase
  implements UseCase<string, Institution | null>
{
  constructor(private institutionService: InstitutionService) {}

  execute(id: string) {
    return this.institutionService.delete(id);
  }
}

export function provideDeleteInstitutionUseCase() {
  return createUseCaseProvider(DeleteInstitutionUseCase, [InstitutionService]);
}
