import { NotFoundError, PersistenceError } from '@devmx/shared-util-errors';
import { SkillsService } from '../services';
import {
  UseCase,
  Skill,
  EditableSkill,
} from '@devmx/shared-api-interfaces';

export class UpdateSkillUseCase
  implements UseCase<EditableSkill, Skill>
{
  constructor(private skillService: SkillsService) {}

  async execute(data: EditableSkill) {
    const job = await this.skillService.findOne(data.id);

    if (!job) {
      throw new NotFoundError(`Habilidade não encontrada`);
    }

    const updated = await this.skillService.update(data.id, data);

    if (!updated) {
      throw new PersistenceError(
        `Algo deu errado ao persistir os dados da habilidade`
      );
    }

    return updated;
  }
}
