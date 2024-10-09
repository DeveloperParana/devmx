import { JobDto, CreateJobDto, UpdateJobDto, CreatedJobDto } from '../dtos';
import { PageDto, QueryParamsDto } from '@devmx/shared-data-source';
import { Job } from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import {
  FindJobsUseCase,
  CreateJobUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
  FindJobByIDUseCase,
} from '@devmx/career-domain/server';

// prettier-ignore
export class JobsFacade {
  constructor(
    private createJobUseCase: CreateJobUseCase,
    private findJobsUseCase: FindJobsUseCase,
    private findJobByIDUseCase: FindJobByIDUseCase,
    private updateJobUseCase: UpdateJobUseCase,
    private removeJobUseCase: RemoveJobUseCase
  ) {}

  async create(data: CreateJobDto) {
    const job = await this.createJobUseCase.execute(data);
    return plainToInstance(CreatedJobDto, job);
  }

  async find(params: QueryParamsDto<Job>) {
    const { data, items, pages } = await this.findJobsUseCase.execute(
      params
    );
    const jobs = plainToInstance(JobDto, data);
    return new PageDto(jobs, items, pages);
  }

  async findOne(id: string) {
    const job = await this.findJobByIDUseCase.execute(id);
    return plainToInstance(JobDto, job);
  }

  async update(id: string, data: UpdateJobDto) {
    const job = await this.updateJobUseCase.execute({...data, id });
    return plainToInstance(JobDto, job);
  }

  async remove(id: string) {
    const job = this.removeJobUseCase.execute(id);
    return plainToInstance(JobDto, job);
  }
}
