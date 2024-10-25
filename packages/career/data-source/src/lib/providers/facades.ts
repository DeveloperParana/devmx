import { provideSkillsFacade, provideJobOpeningsFacade } from '../application';

export function provideFacades() {
  return [provideSkillsFacade(), provideJobOpeningsFacade()];
}
