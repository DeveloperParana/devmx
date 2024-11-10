import { Skill } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class SkillDto implements Skill {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
