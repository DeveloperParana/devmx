import { CreateSkill } from '@devmx/career-domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto implements CreateSkill {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
