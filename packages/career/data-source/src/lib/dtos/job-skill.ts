import { JobSkill } from '@devmx/shared-api-interfaces';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { SkillDto } from './skill';

export class JobSkillDto implements JobSkill {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  weight: number;

  @Type(() => SkillDto)
  @ApiProperty({ type: () => SkillDto })
  skill: SkillDto;
}
