import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CreateJobOpeningUseCase,
  JobOpeningsService,
  FindJobOpeningsUseCase,
  FindJobOpeningByIDUseCase,
  UpdateJobOpeningUseCase,
  DeleteJobOpeningUseCase,
  CreateSkillUseCase,
  SkillsService,
  FindSkillsUseCase,
  FindSkillByIDUseCase,
  UpdateSkillUseCase,
  DeleteSkillUseCase,
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

export function provideCreateSkillUseCase() {
  return createUseCaseProvider(CreateSkillUseCase, [SkillsService]);
}

export function provideFindSkillsUseCase() {
  return createUseCaseProvider(FindSkillsUseCase, [SkillsService]);
}

export function provideFindSkillByIDUseCase() {
  return createUseCaseProvider(FindSkillByIDUseCase, [SkillsService]);
}

export function provideUpdateSkillUseCase() {
  return createUseCaseProvider(UpdateSkillUseCase, [SkillsService]);
}

export function provideDeleteSkillUseCase() {
  return createUseCaseProvider(DeleteSkillUseCase, [SkillsService]);
}

export function provideUseCases() {
  return [
    provideCreateSkillUseCase(),
    provideFindSkillsUseCase(),
    provideFindSkillByIDUseCase(),
    provideUpdateSkillUseCase(),
    provideDeleteSkillUseCase(),

    provideCreateJobOpeningUseCase(),
    provideFindJobOpeningsUseCase(),
    provideFindJobOpeningByIDUseCase(),
    provideUpdateJobOpeningUseCase(),
    provideDeleteJobOpeningUseCase(),
  ];
}
