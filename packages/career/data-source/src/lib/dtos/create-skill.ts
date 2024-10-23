import { Skill } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto implements Skill {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
