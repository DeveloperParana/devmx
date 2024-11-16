import { ImageMimeType, Photo } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AlbumRefDto, UserRefDto } from '@devmx/shared-data-source';
import { Exclude, Type } from 'class-transformer';

export class PhotoDto implements Photo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  data: string;

  @ApiPropertyOptional()
  caption?: string;

  @ApiProperty()
  width: number;

  @ApiProperty()
  height: number;

  @ApiProperty()
  type: ImageMimeType;

  @Exclude()
  content: Buffer;

  @ApiPropertyOptional({ type: () => [UserRefDto] })
  @Type(() => UserRefDto)
  tagged?: UserRefDto[];

  @ApiProperty({ type: () => Date })
  @Type(() => Date)
  createdAt: Date;

  @ApiProperty({ type: () => AlbumRefDto })
  @Type(() => AlbumRefDto)
  album: AlbumRefDto;

  @ApiProperty({ type: () => UserRefDto })
  @Type(() => UserRefDto)
  owner: UserRefDto;
}
