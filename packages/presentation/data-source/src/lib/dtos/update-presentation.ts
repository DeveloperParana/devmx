import { OmitType } from '@nestjs/swagger';
import { CreatePresentationDto } from './create-presentation';

export class UpdatePresentationDto extends OmitType(CreatePresentationDto, [
  'id',
]) {
  id: string;
}
