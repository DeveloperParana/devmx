import { UseCase, Course, EditableCourse } from '@devmx/shared-api-interfaces';
import { CoursesService } from '../services';

export class UpdateCourseUseCase implements UseCase<EditableCourse, Course> {
  constructor(private coursesService: CoursesService) {}

  async execute(data: EditableCourse) {
    return this.coursesService.update(data.id, data);
  }
}
