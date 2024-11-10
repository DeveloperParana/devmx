import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  CreateJobOpeningUseCase,
  JobOpeningService,
  FindJobOpeningsUseCase,
  FindJobOpeningByIDUseCase,
  UpdateJobOpeningUseCase,
  DeleteJobOpeningUseCase,
} from '@devmx/career-domain/client';

export function provideCreateJobOpeningUseCase() {
  return createUseCaseProvider(CreateJobOpeningUseCase, [JobOpeningService]);
}

export function provideFindJobOpeningsUseCase() {
  return createUseCaseProvider(FindJobOpeningsUseCase, [JobOpeningService]);
}

export function provideFindJobOpeningByIDUseCase() {
  return createUseCaseProvider(FindJobOpeningByIDUseCase, [JobOpeningService]);
}

export function provideUpdateJobOpeningUseCase() {
  return createUseCaseProvider(UpdateJobOpeningUseCase, [JobOpeningService]);
}

export function provideDeleteJobOpeningUseCase() {
  return createUseCaseProvider(DeleteJobOpeningUseCase, [JobOpeningService]);
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
