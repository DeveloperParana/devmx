import { createUseCaseProvider } from '@devmx/shared-util-data/client';
import { Course, UseCase } from '@devmx/shared-api-interfaces';
import { CourseService } from '../services';

export class DeleteCourseUseCase implements UseCase<string, Course | null> {
  constructor(private courseService: CourseService) {}

  execute(id: string) {
    return this.courseService.delete(id);
  }
}

export function provideDeleteCourseUseCase() {
  return createUseCaseProvider(DeleteCourseUseCase, [CourseService]);
}
