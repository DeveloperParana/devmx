import { EditableSkill, Skill } from '@devmx/shared-api-interfaces';
import { EntityFacade } from '@devmx/shared-data-access';

export abstract class SkillFacade extends EntityFacade<Skill> {
  abstract loadOne(id: string): void;

  abstract create(data: EditableSkill): void;

  abstract update(data: EditableSkill): void;

  abstract delete(id: string): void;
}
