import { Subject, UseCase } from '@devmx/shared-api-interfaces';
import { SubjectsService } from '../services';

export class DeleteSubjectUseCase implements UseCase<string, Subject> {
  constructor(private subjectsService: SubjectsService) {}

  async execute(id: string) {
    return this.subjectsService.delete(id);
  }
}
