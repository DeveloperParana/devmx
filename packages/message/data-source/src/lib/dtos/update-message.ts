import { CreateMessageDto } from './create-message';
import { OmitType } from '@nestjs/swagger';

export class UpdateMessageDto extends OmitType(CreateMessageDto, ['id']) {
  id: string;
}
