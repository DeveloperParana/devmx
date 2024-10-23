import { createServerProvider } from '@devmx/shared-data-source';
import { JobsFacade, provideSkillsFacade } from '../facades';
import {
  CreateJobUseCase,
  FindJobByIDUseCase,
  FindJobsUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
} from '@devmx/career-domain/server';

export function provideJobsFacade() {
  return createServerProvider(JobsFacade, [
    CreateJobUseCase,
    FindJobsUseCase,
    FindJobByIDUseCase,
    UpdateJobUseCase,
    RemoveJobUseCase,
  ]);
}

export function provideFacades() {
  return [provideJobsFacade(), provideSkillsFacade()];
}
