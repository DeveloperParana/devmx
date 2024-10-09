import { JobsService } from '../services';
import {
  Job,
  Page,
  UseCase,
  QueryParams,
  QueryFilter,
} from '@devmx/shared-api-interfaces';

export class FindJobsUseCase implements UseCase<QueryParams<Job>, Page<Job>> {
  constructor(private jobsService: JobsService) {}

  async execute(params: QueryParams<Job>) {
    const filter: QueryFilter<Job> = {};

    if (params.filter) {
      if (params.filter.title) {
        filter.title = new RegExp(params.filter.title, 'i');
      } else {
        delete params.filter.title;
      }

      if (params.filter.description) {
        filter.description = new RegExp(params.filter.description, 'i');
      } else {
        delete params.filter.description;
      }

      if (params.filter.mode) {
        filter.mode = new RegExp(params.filter.mode, 'i');
      } else {
        delete params.filter.mode;
      }

      if (params.filter.contract) {
        filter.contract = new RegExp(params.filter.contract, 'i');
      } else {
        delete params.filter.contract;
      }

      if (params.filter.experience) {
        filter.experience = new RegExp(params.filter.experience, 'i');
      } else {
        delete params.filter.experience;
      }
    }

    params.filter = { ...params.filter, ...filter };

    return await this.jobsService.find(params);
  }
}
