import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { ImageRefDto } from '@devmx/shared-data-source';
import { CreateEvent } from '@devmx/event-domain';
import { Type } from 'class-transformer';

export class CreateEventDto implements CreateEvent {
  id: string;

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

  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => ImageRefDto)
  cover?: ImageRefDto;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  visible = false;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address: string;

  // city?: string;

  // location?: string;

  owner: string;
}
