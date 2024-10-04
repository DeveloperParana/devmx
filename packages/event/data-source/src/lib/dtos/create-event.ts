import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EventFormat } from '@devmx/shared-api-interfaces';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['in-person', 'online', 'mixed'],
    example: 'in-person',
  })
  format: EventFormat;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  date: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  time: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cover = '';

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  visible = false;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address: string;

  city?: string;

  location?: string;

  owner: string
}
