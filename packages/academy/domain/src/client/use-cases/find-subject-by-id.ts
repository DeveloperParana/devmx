import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { Subject, UseCase } from '@devmx/shared-api-interfaces';
import { SubjectService } from '../services';

export class FindSubjectByIDUseCase implements UseCase<string, Subject | null> {
  constructor(private subjectService: SubjectService) {}

  execute(id: string) {
    return this.subjectService.findOne(id);
  }
}

export function provideFindSubjectByIDUseCase() {
  return createUseCaseProvider(FindSubjectByIDUseCase, [SubjectService]);
}
