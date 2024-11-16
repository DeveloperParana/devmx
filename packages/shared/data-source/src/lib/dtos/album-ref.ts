import { AlbumRef } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class AlbumRefDto implements AlbumRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;
}
