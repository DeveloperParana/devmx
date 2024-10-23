import { createClientProvider } from '@devmx/shared-data-access';
import { provideSkillFacade } from '../application';
import { JobFacade } from '../facades';
import {
  CreateJobUseCase,
  FindJobByIDUseCase,
  FindJobsUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
} from '@devmx/career-domain/client';

export function provideJobFacade() {
  return createClientProvider(JobFacade, [
    CreateJobUseCase,
    FindJobsUseCase,
    FindJobByIDUseCase,
    UpdateJobUseCase,
    RemoveJobUseCase,
  ]);
}

export function provideFacades() {
  return [provideJobFacade(), provideSkillFacade()];
}
