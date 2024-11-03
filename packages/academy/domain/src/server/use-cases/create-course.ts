import { UseCase, Course, EditableCourse } from '@devmx/shared-api-interfaces';
import { CoursesService } from '../services';

export class CreateCourseUseCase implements UseCase<EditableCourse, Course> {
  constructor(private coursesService: CoursesService) {}

  execute(data: EditableCourse) {
    return this.coursesService.create(data);
  }
}
