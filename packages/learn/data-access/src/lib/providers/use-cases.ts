import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  SkillService,
  CreateSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  DeleteSkillUseCase,
  UpdateSkillUseCase,
} from '@devmx/learn-domain/client';

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

export function provideDeleteSkillUseCase() {
  return createUseCaseProvider(DeleteSkillUseCase, [SkillService]);
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
