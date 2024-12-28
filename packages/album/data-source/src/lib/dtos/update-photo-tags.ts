import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserTagDto } from '@devmx/shared-data-source';
import { Exclude, Type } from 'class-transformer';
import {
  UserTag,
  ImageMimeType,
  UpdatePhotoTags,
} from '@devmx/shared-api-interfaces';

export class UpdatePhotoTagsDto implements UpdatePhotoTags {
  id: string;

  @Exclude()
  data: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  width: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  height: number;

  @IsNotEmpty()
  album: string;

  @IsOptional()
  @ApiPropertyOptional()
  type: ImageMimeType;

  @IsOptional()
  @ApiPropertyOptional()
  caption?: string;

  @Type(() => UserTagDto)
  tags: UserTag[] = [];

  owner: string;
}
