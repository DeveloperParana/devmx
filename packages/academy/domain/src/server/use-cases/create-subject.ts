import { SubjectsService } from '../services';
import {
  UseCase,
  Subject,
  EditableSubject,
} from '@devmx/shared-api-interfaces';

export class CreateSubjectUseCase implements UseCase<EditableSubject, Subject> {
  constructor(private subjectsService: SubjectsService) {}

  execute(data: EditableSubject) {
    return this.subjectsService.create(data);
  }
}
