import { CourseService } from '../services';
import { UseCase, Course, EditableCourse } from '@devmx/shared-api-interfaces';

export class CreateCourseUseCase implements UseCase<EditableCourse, Course> {
  constructor(private courseService: CourseService) {}

  execute(data: EditableCourse) {
    return this.courseService.create(data);
  }
}
