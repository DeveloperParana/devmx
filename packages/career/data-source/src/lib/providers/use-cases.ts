import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CreateJobOpeningUseCase,
  JobOpeningsService,
  FindJobOpeningsUseCase,
  FindJobOpeningByIDUseCase,
  UpdateJobOpeningUseCase,
  DeleteJobOpeningUseCase,
} from '@devmx/career-domain/server';

export function provideCreateJobOpeningUseCase() {
  return createUseCaseProvider(CreateJobOpeningUseCase, [JobOpeningsService]);
}

export function provideFindJobOpeningsUseCase() {
  return createUseCaseProvider(FindJobOpeningsUseCase, [JobOpeningsService]);
}

export function provideFindJobOpeningByIDUseCase() {
  return createUseCaseProvider(FindJobOpeningByIDUseCase, [JobOpeningsService]);
}

export function provideUpdateJobOpeningUseCase() {
  return createUseCaseProvider(UpdateJobOpeningUseCase, [JobOpeningsService]);
}

export function provideDeleteJobOpeningUseCase() {
  return createUseCaseProvider(DeleteJobOpeningUseCase, [JobOpeningsService]);
}

export function provideUseCases() {
  return [
    provideCreateJobOpeningUseCase(),
    provideFindJobOpeningsUseCase(),
    provideFindJobOpeningByIDUseCase(),
    provideUpdateJobOpeningUseCase(),
    provideDeleteJobOpeningUseCase(),
  ];
}
