import { CreatePhotoDto } from './create-photo';
import { OmitType } from '@nestjs/swagger';

export class UpdatePhotoDto extends OmitType(CreatePhotoDto, ['id']) {
  id: string;
}
