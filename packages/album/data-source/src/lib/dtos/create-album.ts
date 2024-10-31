import { IsNotEmpty, IsString } from 'class-validator';
import { Photo } from '@devmx/shared-api-interfaces';
import { CreateAlbum } from '@devmx/album-domain';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto implements CreateAlbum {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  photos: Photo[] = [];

  // @IsString()
  // @IsOptional()
  // @ApiPropertyOptional()
  // description: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({
  //   type: 'enum',
  //   enum: ['in-person', 'online', 'mixed'],
  //   example: 'in-person',
  // })
  // format: AlbumFormat;

  // @IsString()
  // @IsOptional()
  // @ApiPropertyOptional()
  // date: string;

  // @IsString()
  // @IsOptional()
  // @ApiPropertyOptional()
  // time: string;

  // @IsString()
  // @IsOptional()
  // @ApiPropertyOptional()
  // cover?: string;

  // @IsBoolean()
  // @IsOptional()
  // @ApiPropertyOptional()
  // visible = false;

  // @IsString()
  // @IsOptional()
  // @ApiPropertyOptional()
  // address: string;

  // city?: string;

  // location?: string;

  owner: string;
}
