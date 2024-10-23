import { createClientProvider, EntityFacade } from '@devmx/shared-data-access';
import { CreateSkill, UpdateSkill } from '@devmx/career-domain';
import { Skill } from '@devmx/shared-api-interfaces';
import {
  CreateSkillUseCase,
  FindSkillByIDUseCase,
  FindSkillsUseCase,
  RemoveSkillUseCase,
  UpdateSkillUseCase,
} from '@devmx/career-domain/client';

export class SkillFacade extends EntityFacade<Skill> {
  constructor(
    private createSkillUseCase: CreateSkillUseCase,
    private findSkillsUseCase: FindSkillsUseCase,
    private findSkillByIDUseCase: FindSkillByIDUseCase,
    private updateSkillUseCase: UpdateSkillUseCase,
    private removeSkillUseCase: RemoveSkillUseCase
  ) {
    super({
      response: { data: [], items: 0, pages: 0 },
      params: { page: 0, size: 10, filter: { name: '' } },
      selected: null,
    });
  }

  load() {
    this.onLoad(this.findSkillsUseCase.execute(this.state.params));
  }

  loadOne(id: string) {
    this.onLoadOne(this.findSkillByIDUseCase.execute(id));
  }

  create(data: CreateSkill) {
    this.onCreate(this.createSkillUseCase.execute(data));
  }

  update(data: UpdateSkill) {
    this.onUpdate(this.updateSkillUseCase.execute(data));
  }

  delete(id: string) {
    this.onDelete(this.removeSkillUseCase.execute(id));
  }
}

export function provideSkillFacade() {
  return createClientProvider(SkillFacade, [
    CreateSkillUseCase,
    FindSkillsUseCase,
    FindSkillByIDUseCase,
    UpdateSkillUseCase,
    RemoveSkillUseCase,
  ]);
}
