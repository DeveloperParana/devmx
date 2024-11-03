import { Course, UseCase } from '@devmx/shared-api-interfaces';
import { CoursesService } from '../services';

export class DeleteCourseUseCase implements UseCase<string, Course> {
  constructor(private coursesService: CoursesService) {}

  async execute(id: string) {
    return this.coursesService.delete(id);
  }
}
