import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { Course, EditableCourse } from '@devmx/shared-api-interfaces';
import {
  CreateCourseUseCase,
  DeleteCourseUseCase,
  FindCourseByIDUseCase,
  FindCoursesUseCase,
  UpdateCourseUseCase,
} from '@devmx/academy-domain/client';

export class CourseFacade extends EntityFacade<Course> {
  constructor(
    private createCourseUseCase: CreateCourseUseCase,
    private findCoursesUseCase: FindCoursesUseCase,
    private findCourseByIdUseCase: FindCourseByIDUseCase,
    private updateCourseUseCase: UpdateCourseUseCase,
    private deleteCourseUseCase: DeleteCourseUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { name: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findCoursesUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findCourseByIdUseCase.execute(id));
  }

  create(data: EditableCourse) {
    this.onCreate(this.createCourseUseCase.execute(data));
  }

  update(data: EditableCourse) {
    this.onUpdate(this.updateCourseUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteCourseUseCase.execute(id));
  }
}

export function provideCourseFacade() {
  return createClientProvider(CourseFacade, [
    CreateCourseUseCase,
    FindCoursesUseCase,
    FindCourseByIDUseCase,
    UpdateCourseUseCase,
    DeleteCourseUseCase,
  ]);
}
