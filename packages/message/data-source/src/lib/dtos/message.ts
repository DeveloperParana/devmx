import { Message } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class MessageDto implements Message {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;
}
