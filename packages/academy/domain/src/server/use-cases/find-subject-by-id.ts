import { Subject, UseCase } from '@devmx/shared-api-interfaces';
import { SubjectsService } from '../services';

export class FindSubjectByIDUseCase implements UseCase<string, Subject | null> {
  constructor(private subjectsService: SubjectsService) {}

  async execute(id: string) {
    return this.subjectsService.findOne(id);
  }
}
