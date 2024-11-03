import { CreateAlbumDto } from './create-album';
import { OmitType } from '@nestjs/swagger';

export class UpdateAlbumDto extends OmitType(CreateAlbumDto, ['id']) {
  id: string;
}
