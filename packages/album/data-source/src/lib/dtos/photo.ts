import { AlbumRefDto, UserRefDto, UserTagDto } from '@devmx/shared-data-source';
import { ImageMimeType, Photo } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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

  @Exclude()
  tagged: UserRefDto[];

  @ApiProperty({ type: () => [UserTagDto] })
  @Type(() => UserTagDto)
  tags: UserTagDto[] = [];

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
