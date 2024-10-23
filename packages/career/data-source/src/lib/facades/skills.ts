import { SkillsService } from '@devmx/career-domain/server';
import { Skill } from '@devmx/shared-api-interfaces';
import { EntityFacade } from '@devmx/shared-data-source';

export class SkillsFacade extends EntityFacade<Skill> {}

export function provideSkillsFacade() {
  return {
    provide: SkillsFacade,
    useFactory(service: SkillsService) {
      return new SkillsFacade(service);
    },
    inject: [SkillsService],
  };
}
