import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { SubjectService } from '../services';
import {
  UseCase,
  Subject,
  EditableSubject,
} from '@devmx/shared-api-interfaces';

export class UpdateSubjectUseCase implements UseCase<EditableSubject, Subject> {
  constructor(private subjectService: SubjectService) {}

  execute(data: EditableSubject) {
    return this.subjectService.update(data.id, data);
  }
}

export function provideUpdateSubjectUseCase() {
  return createUseCaseProvider(UpdateSubjectUseCase, [SubjectService]);
}
