import { provideCourseHttpService } from '../infrastructure';
import { provideCourseFacade } from '../application';
import {
  provideFindCoursesUseCase,
  provideCreateCourseUseCase,
  provideDeleteCourseUseCase,
  provideUpdateCourseUseCase,
  provideFindCourseByIDUseCase,
} from '@devmx/academy-domain/client';

export function provideCourse() {
  return [
    provideCourseHttpService(),

    provideCreateCourseUseCase(),
    provideFindCoursesUseCase(),
    provideFindCourseByIDUseCase(),
    provideUpdateCourseUseCase(),
    provideDeleteCourseUseCase(),

    provideCourseFacade(),
  ];
}
