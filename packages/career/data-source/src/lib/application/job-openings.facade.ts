import { JobOpening } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  CreateJobOpeningUseCase,
  DeleteJobOpeningUseCase,
  FindJobOpeningByIDUseCase,
  FindJobOpeningsUseCase,
  UpdateJobOpeningUseCase,
} from '@devmx/career-domain/server';
import {
  PageDto,
  QueryParamsDto,
  createServerProvider,
} from '@devmx/shared-data-source';
import {
  JobOpeningDto,
  CreateJobOpeningDto,
  UpdateJobOpeningDto,
} from '../dtos';

export class JobOpeningsFacade {
  constructor(
    private createJobOpeningUseCase: CreateJobOpeningUseCase,
    private findJobOpeningsUseCase: FindJobOpeningsUseCase,
    private findJobOpeningByIDUseCase: FindJobOpeningByIDUseCase,
    private updateJobOpeningUseCase: UpdateJobOpeningUseCase,
    private deleteJobOpeningUseCase: DeleteJobOpeningUseCase
  ) {}

  async create(data: CreateJobOpeningDto) {
    const job = await this.createJobOpeningUseCase.execute(data);
    return plainToInstance(JobOpeningDto, job);
  }

  async find(params: QueryParamsDto<JobOpening>) {
    const { data, items, pages } = await this.findJobOpeningsUseCase.execute(
      params
    );
    const jobs = plainToInstance(JobOpeningDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findOne(id: string) {
    const job = await this.findJobOpeningByIDUseCase.execute(id);
    return plainToInstance(JobOpeningDto, job);
  }

  async update(id: string, data: UpdateJobOpeningDto) {
    const job = await this.updateJobOpeningUseCase.execute({ ...data, id });
    return plainToInstance(JobOpeningDto, job);
  }

  async delete(id: string) {
    const job = this.deleteJobOpeningUseCase.execute(id);
    return plainToInstance(JobOpeningDto, job);
  }
}

export function provideJobOpeningsFacade() {
  return createServerProvider(JobOpeningsFacade, [
    CreateJobOpeningUseCase,
    FindJobOpeningsUseCase,
    FindJobOpeningByIDUseCase,
    UpdateJobOpeningUseCase,
    DeleteJobOpeningUseCase,
  ]);
}
