import { UseCase, Course, EditableCourse } from '@devmx/shared-api-interfaces';
import { CourseService } from '../services';

export class UpdateCourseUseCase implements UseCase<EditableCourse, Course> {
  constructor(private courseService: CourseService) {}

  execute(data: EditableCourse) {
    return this.courseService.update(data.id, data);
  }
}
