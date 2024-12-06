import { provideSubjectHttpService } from '../infrastructure';
import { provideSubjectFacade } from '../application';
import {
  provideFindSubjectsUseCase,
  provideCreateSubjectUseCase,
  provideDeleteSubjectUseCase,
  provideUpdateSubjectUseCase,
  provideFindSubjectByIDUseCase,
} from '@devmx/academy-domain/client';

export function provideSubject() {
  return [
    provideSubjectHttpService(),

    provideCreateSubjectUseCase(),
    provideFindSubjectsUseCase(),
    provideFindSubjectByIDUseCase(),
    provideUpdateSubjectUseCase(),
    provideDeleteSubjectUseCase(),

    provideSubjectFacade(),
  ];
}
