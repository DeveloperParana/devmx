import { PersistenceError } from '@devmx/shared-util-errors';
import { Skill, UseCase } from '@devmx/shared-api-interfaces';
import { SkillsService } from '../services';

export class DeleteSkillUseCase implements UseCase<string, Skill> {
  constructor(private skillsService: SkillsService) {}

  async execute(id: string) {
    const deleted = await this.skillsService.delete(id);

    if (!deleted) {
      throw new PersistenceError(`Algo deu errado ao apagar habilidade`);
    }

    return deleted;
  }
}
