import { SubjectsService } from '../services';
import {
  UseCase,
  Subject,
  EditableSubject,
} from '@devmx/shared-api-interfaces';

export class UpdateSubjectUseCase implements UseCase<EditableSubject, Subject> {
  constructor(private subjectsService: SubjectsService) {}

  async execute(data: EditableSubject) {
    return this.subjectsService.update(data.id, data);
  }
}
