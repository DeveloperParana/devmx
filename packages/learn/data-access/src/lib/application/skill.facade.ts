import { createFacadeProvider, EntityFacade } from '@devmx/shared-data-access';
import { Skill, EditableSkill } from '@devmx/shared-api-interfaces';
import { SkillFacade } from '../ports';
import {
  CreateSkillUseCase,
  DeleteSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  UpdateSkillUseCase,
} from '@devmx/learn-domain/client';

export class SkillFacadeImpl
  extends EntityFacade<Skill>
  implements SkillFacade
{
  constructor(
    private createSkillUseCase: CreateSkillUseCase,
    private findSkillsUseCase: FindSkillsUseCase,
    private findSkillByIdUseCase: FindSkillByIDUseCase,
    private updateSkillUseCase: UpdateSkillUseCase,
    private deleteSkillUseCase: DeleteSkillUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: {
        page: 0,
        size: 10,
        filter: { name: '' },
      },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findSkillsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findSkillByIdUseCase.execute(id));
  }

  create(data: EditableSkill) {
    this.onCreate(this.createSkillUseCase.execute(data));
  }

  update(data: EditableSkill) {
    this.onUpdate(this.updateSkillUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.deleteSkillUseCase.execute(id));
  }
}

export function provideSkillFacade() {
  return createFacadeProvider(SkillFacade, SkillFacadeImpl, [
    CreateSkillUseCase,
    FindSkillsUseCase,
    FindSkillByIDUseCase,
    UpdateSkillUseCase,
    DeleteSkillUseCase,
  ]);
}
