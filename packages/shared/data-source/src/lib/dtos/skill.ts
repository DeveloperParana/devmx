import { Skill } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class SkillDto implements Skill {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;
}
