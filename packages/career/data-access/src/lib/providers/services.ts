import {
  provideJobOpeningHttpService,
  provideSkillHttpService,
} from '../infrastructure';

export function provideServices() {
  return [provideSkillHttpService(), provideJobOpeningHttpService()];
}
