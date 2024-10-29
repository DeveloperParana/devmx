import { CreateEventDto } from './create-event';
import { OmitType } from '@nestjs/swagger';

export class UpdateEventDto extends OmitType(CreateEventDto, ['id']) {
  id: string;
}
