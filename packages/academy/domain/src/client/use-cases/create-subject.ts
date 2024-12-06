import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { SubjectService } from '../services';
import {
  UseCase,
  Subject,
  EditableSubject,
} from '@devmx/shared-api-interfaces';

export class CreateSubjectUseCase implements UseCase<EditableSubject, Subject> {
  constructor(private subjectService: SubjectService) {}

  execute(data: EditableSubject) {
    return this.subjectService.create(data);
  }
}

export function provideCreateSubjectUseCase() {
  return createUseCaseProvider(CreateSubjectUseCase, [SubjectService]);
}
