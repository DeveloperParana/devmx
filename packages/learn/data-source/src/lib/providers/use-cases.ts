import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  CreateSkillUseCase,
  DeleteSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  SkillsService,
  UpdateSkillUseCase,
} from '@devmx/learn-domain/server';

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
  ];
}
