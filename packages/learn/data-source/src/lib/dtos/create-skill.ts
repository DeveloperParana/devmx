import { CreateSkill } from '@devmx/learn-domain';
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSkillDto implements CreateSkill {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
