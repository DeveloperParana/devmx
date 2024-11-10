import { provideSkillFacade } from '../application';

export function provideFacades() {
  return [provideSkillFacade()];
}
