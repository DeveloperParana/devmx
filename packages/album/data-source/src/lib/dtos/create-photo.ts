import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { UserRef } from '@devmx/shared-api-interfaces';
import { UserRefDto } from '@devmx/shared-data-source';
import { CreatePhoto } from '@devmx/album-domain';
import { Exclude, Type } from 'class-transformer';

export class CreatePhotoDto implements CreatePhoto {
  id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  caption?: string;

  @IsString()
  @ApiProperty()
  album: string;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  width: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  height: number;

  content: Buffer;

  @Exclude()
  data: string;

  @ApiPropertyOptional()
  type: string;

  @Type(() => UserRefDto)
  tagged?: UserRef[];

  owner: string;
}
