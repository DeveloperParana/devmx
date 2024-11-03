import { Course, UseCase } from '@devmx/shared-api-interfaces';
import { CoursesService } from '../services';

export class FindCourseByIDUseCase implements UseCase<string, Course | null> {
  constructor(private coursesService: CoursesService) {}

  async execute(id: string) {
    return this.coursesService.findOne(id);
  }
}
