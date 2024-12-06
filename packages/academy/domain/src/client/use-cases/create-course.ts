import { UseCase, Course, EditableCourse } from '@devmx/shared-api-interfaces';
import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { CourseService } from '../services';

export class CreateCourseUseCase implements UseCase<EditableCourse, Course> {
  constructor(private courseService: CourseService) {}

  execute(data: EditableCourse) {
    return this.courseService.create(data);
  }
}

export function provideCreateCourseUseCase() {
  return createUseCaseProvider(CreateCourseUseCase, [CourseService]);
}
