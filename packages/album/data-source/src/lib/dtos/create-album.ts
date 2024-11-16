import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Photo } from '@devmx/shared-api-interfaces';
import { CreateAlbum } from '@devmx/album-domain';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UserRefDto } from '@devmx/shared-data-source';

export class CreateAlbumDto implements CreateAlbum {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  photos: Photo[];

  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => UserRefDto)
  contributors?: UserRefDto[];

  owner: string;
}
