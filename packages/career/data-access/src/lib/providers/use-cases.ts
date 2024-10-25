import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  JobService,
  FindJobsUseCase,
  CreateJobUseCase,
  RemoveJobUseCase,
  UpdateJobUseCase,
  FindJobByIDUseCase,
  CreateSkillUseCase,
  SkillService,
  FindSkillsUseCase,
  FindSkillByIDUseCase,
  UpdateSkillUseCase,
  RemoveSkillUseCase,
  CreateJobOpeningUseCase,
  JobOpeningService,
  FindJobOpeningsUseCase,
  FindJobOpeningByIDUseCase,
  UpdateJobOpeningUseCase,
  DeleteJobOpeningUseCase,
} from '@devmx/career-domain/client';

export function provideCreateJobUseCase() {
  return createUseCaseProvider(CreateJobUseCase, [JobService]);
}

export function provideFindJobsUseCase() {
  return createUseCaseProvider(FindJobsUseCase, [JobService]);
}

export function provideFindJobByIDUseCase() {
  return createUseCaseProvider(FindJobByIDUseCase, [JobService]);
}

export function provideUpdateJobUseCase() {
  return createUseCaseProvider(UpdateJobUseCase, [JobService]);
}

export function provideRemoveJobUseCase() {
  return createUseCaseProvider(RemoveJobUseCase, [JobService]);
}

export function provideCreateSkillUseCase() {
  return createUseCaseProvider(CreateSkillUseCase, [SkillService]);
}

export function provideFindSkillsUseCase() {
  return createUseCaseProvider(FindSkillsUseCase, [SkillService]);
}

export function provideFindSkillByIDUseCase() {
  return createUseCaseProvider(FindSkillByIDUseCase, [SkillService]);
}

export function provideUpdateSkillUseCase() {
  return createUseCaseProvider(UpdateSkillUseCase, [SkillService]);
}

export function provideRemoveSkillUseCase() {
  return createUseCaseProvider(RemoveSkillUseCase, [SkillService]);
}

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
    provideCreateJobUseCase(),
    provideFindJobsUseCase(),
    provideFindJobByIDUseCase(),
    provideUpdateJobUseCase(),
    provideRemoveJobUseCase(),

    provideCreateSkillUseCase(),
    provideFindSkillsUseCase(),
    provideFindSkillByIDUseCase(),
    provideUpdateSkillUseCase(),
    provideRemoveSkillUseCase(),

    provideCreateJobOpeningUseCase(),
    provideFindJobOpeningsUseCase(),
    provideFindJobOpeningByIDUseCase(),
    provideUpdateJobOpeningUseCase(),
    provideDeleteJobOpeningUseCase(),
  ];
}
