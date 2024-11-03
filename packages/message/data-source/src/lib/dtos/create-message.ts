import { CreateMessage } from '@devmx/message-domain';
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto implements CreateMessage {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  text: string;
}
