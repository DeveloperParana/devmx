import { Subject, UseCase } from '@devmx/shared-api-interfaces';
import { SubjectService } from '../services';

export class DeleteSubjectUseCase implements UseCase<string, Subject | null> {
  constructor(private subjectService: SubjectService) {}

  execute(id: string) {
    return this.subjectService.delete(id);
  }
}