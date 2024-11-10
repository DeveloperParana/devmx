import { CreateSkillDto } from './create-skill';
import { OmitType } from '@nestjs/swagger';

export class UpdateSkillDto extends OmitType(CreateSkillDto, ['id']) {
  id: string;
}
