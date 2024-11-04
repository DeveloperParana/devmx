import { Album, Photo } from '@devmx/shared-api-interfaces';
import { UserRefDto } from '@devmx/shared-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AlbumDto implements Album {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  photos: Photo[];

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
