import { UserRefDto } from '@devmx/shared-data-source';
import { Album } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { PhotoDto } from './photo';

export class AlbumDto implements Album {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @Type(() => PhotoDto)
  photos: PhotoDto[];

  @ApiProperty({ type: () => [UserRefDto] })
  @Type(() => UserRefDto)
  contributors?: UserRefDto[];

  @ApiProperty({ type: () => Date })
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({ type: () => UserRefDto })
  @Type(() => UserRefDto)
  owner: UserRefDto;
}
