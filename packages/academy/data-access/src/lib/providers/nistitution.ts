import { provideInstitutionHttpService } from '../infrastructure';
import { provideInstitutionFacade } from '../application';
import {
  provideFindInstitutionsUseCase,
  provideCreateInstitutionUseCase,
  provideDeleteInstitutionUseCase,
  provideUpdateInstitutionUseCase,
  provideFindInstitutionByIDUseCase,
} from '@devmx/academy-domain/client';

export function provideInstitution() {
  return [
    provideInstitutionHttpService(),

    provideCreateInstitutionUseCase(),
    provideFindInstitutionsUseCase(),
    provideFindInstitutionByIDUseCase(),
    provideUpdateInstitutionUseCase(),
    provideDeleteInstitutionUseCase(),

    provideInstitutionFacade(),
  ];
}
