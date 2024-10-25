import { provideJobOpeningsMongoService, provideSkillsMongoService } from '../infrastructure';

export function provideServices() {
  return [
    provideSkillsMongoService(),
    provideJobOpeningsMongoService(),
  ];
}
