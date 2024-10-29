import { EventRef } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class EventRefDto implements EventRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}
