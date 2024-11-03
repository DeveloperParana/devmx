import { CourseDto, CreateCourseDto, UpdateCourseDto } from '../dtos';
import { Course } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateCourseUseCase,
  DeleteCourseUseCase,
  FindCourseByIDUseCase,
  FindCoursesUseCase,
  UpdateCourseUseCase,
} from '@devmx/academy-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class CoursesFacade {
  constructor(
    private createCourseUseCase: CreateCourseUseCase,
    private findCoursesUseCase: FindCoursesUseCase,
    private findCourseByIDUseCase: FindCourseByIDUseCase,
    private updateCourseUseCase: UpdateCourseUseCase,
    private deleteCourseUseCase: DeleteCourseUseCase
  ) {}

  async create(data: CreateCourseDto) {
    const subject = await this.createCourseUseCase.execute(data);
    return plainToInstance(CourseDto, subject);
  }

  async find(params: QueryParamsDto<Course>) {
    const { data, items, pages } = await this.findCoursesUseCase.execute(
      params
    );
    const subjects = plainToInstance(CourseDto, data);
    return new PageDto(subjects, items, pages);
  }

  async findOne(id: string) {
    const subject = await this.findCourseByIDUseCase.execute(id);
    return plainToInstance(CourseDto, subject);
  }

  async update(id: string, data: UpdateCourseDto) {
    const subject = await this.updateCourseUseCase.execute({ ...data, id });
    return plainToInstance(CourseDto, subject);
  }

  async delete(id: string) {
    const subject = this.deleteCourseUseCase.execute(id);
    return plainToInstance(CourseDto, subject);
  }
}

export function provideCoursesFacade() {
  return createServerProvider(CoursesFacade, [
    CreateCourseUseCase,
    FindCoursesUseCase,
    FindCourseByIDUseCase,
    UpdateCourseUseCase,
    DeleteCourseUseCase,
  ]);
}
