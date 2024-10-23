import { OmitType } from '@nestjs/mapped-types';
import { UpdateSkill } from '@devmx/career-domain';
import { CreateSkillDto } from './create-skill';

export class UpdateSkillDto
  extends OmitType(CreateSkillDto, ['id'])
  implements UpdateSkill
{
  id: string;
}
