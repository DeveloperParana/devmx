import { provideSkillsMongoService } from '../infrastructure';

export function provideServices() {
  return [provideSkillsMongoService()];
}
