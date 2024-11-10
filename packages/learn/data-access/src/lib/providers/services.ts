import { provideSkillHttpService } from '../infrastructure';

export function provideServices() {
  return [provideSkillHttpService()];
}
