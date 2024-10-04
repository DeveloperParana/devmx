import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePresentationDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty({
    type: 'enum',
    enum: ['talk', 'workshop', 'webinar'],
    example: 'talk',
  })
  format: PresentationFormat;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional()
  tags?: string[] = [];

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional()
  resources?: string[] = [];

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  visible = false;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cover: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  video: string;

  owner: string;
}
