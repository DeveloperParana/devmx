import { CreateEventDto } from './create-event';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  id: string
}
