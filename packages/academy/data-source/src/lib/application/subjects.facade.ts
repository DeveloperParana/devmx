import { SubjectDto, CreateSubjectDto, UpdateSubjectDto } from '../dtos';
import { Subject } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateSubjectUseCase,
  DeleteSubjectUseCase,
  FindSubjectByIDUseCase,
  FindSubjectsUseCase,
  UpdateSubjectUseCase,
} from '@devmx/academy-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';

export class SubjectsFacade {
  constructor(
    private createSubjectUseCase: CreateSubjectUseCase,
    private findSubjectsUseCase: FindSubjectsUseCase,
    private findSubjectByIDUseCase: FindSubjectByIDUseCase,
    private updateSubjectUseCase: UpdateSubjectUseCase,
    private deleteSubjectUseCase: DeleteSubjectUseCase
  ) {}

  async create(data: CreateSubjectDto) {
    const subject = await this.createSubjectUseCase.execute(data);
    return plainToInstance(SubjectDto, subject);
  }

  async find(params: QueryParamsDto<Subject>) {
    const { data, items, pages } = await this.findSubjectsUseCase.execute(
      params
    );
    const subjects = plainToInstance(SubjectDto, data);
    return new PageDto(subjects, items, pages);
  }

  async findOne(id: string) {
    const subject = await this.findSubjectByIDUseCase.execute(id);
    return plainToInstance(SubjectDto, subject);
  }

  async update(id: string, data: UpdateSubjectDto) {
    const subject = await this.updateSubjectUseCase.execute({ ...data, id });
    return plainToInstance(SubjectDto, subject);
  }

  async delete(id: string) {
    const subject = this.deleteSubjectUseCase.execute(id);
    return plainToInstance(SubjectDto, subject);
  }
}

export function provideSubjectsFacade() {
  return createServerProvider(SubjectsFacade, [
    CreateSubjectUseCase,
    FindSubjectsUseCase,
    FindSubjectByIDUseCase,
    UpdateSubjectUseCase,
    DeleteSubjectUseCase,
  ]);
}
