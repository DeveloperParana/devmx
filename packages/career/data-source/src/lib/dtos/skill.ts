import { ApiProperty } from '@nestjs/swagger';

export class SkillDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
