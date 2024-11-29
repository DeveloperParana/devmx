import { UserSkill } from '@devmx/shared-api-interfaces';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { SkillDto } from '@devmx/learn-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UserSkillDto implements UserSkill {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  weight: number;

  @Type(() => SkillDto)
  @ApiProperty({ type: () => SkillDto })
  skill: SkillDto;
}
