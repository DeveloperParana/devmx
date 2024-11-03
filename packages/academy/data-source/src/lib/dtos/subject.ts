import { Subject } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class SubjectDto implements Subject {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
