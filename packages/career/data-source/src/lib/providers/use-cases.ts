import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  JobsService,
  FindJobsUseCase,
  CreateJobUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
  FindJobByIDUseCase,
} from '@devmx/career-domain/server';

export function provideCreateJobUseCase() {
  return createUseCaseProvider(CreateJobUseCase, [JobsService]);
}

export function provideFindJobsUseCase() {
  return createUseCaseProvider(FindJobsUseCase, [JobsService]);
}

export function provideFindJobByIDUseCase() {
  return createUseCaseProvider(FindJobByIDUseCase, [JobsService]);
}

export function provideUpdateJobUseCase() {
  return createUseCaseProvider(UpdateJobUseCase, [JobsService]);
}

export function provideRemoveJobUseCase() {
  return createUseCaseProvider(RemoveJobUseCase, [JobsService]);
}

export function provideUseCases() {
  return [
    provideCreateJobUseCase(),
    provideFindJobsUseCase(),
    provideFindJobByIDUseCase(),
    provideUpdateJobUseCase(),
    provideRemoveJobUseCase(),
  ];
}
