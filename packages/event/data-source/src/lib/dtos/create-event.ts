import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { CreateEvent } from '@devmx/event-domain';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  date: Date;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  time: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cover?: string;

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
