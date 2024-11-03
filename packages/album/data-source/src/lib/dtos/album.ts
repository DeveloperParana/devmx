import { Album, Photo } from '@devmx/shared-api-interfaces';
import { AccountRefDto } from '@devmx/shared-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AlbumDto implements Album {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  photos: Photo[];

  @ApiProperty({ type: () => [AccountRefDto] })
  @Type(() => AccountRefDto)
  contributors?: AccountRefDto[];

  @ApiProperty({ type: () => Date })
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({ type: () => AccountRefDto })
  @Type(() => AccountRefDto)
  owner: AccountRefDto;
}
