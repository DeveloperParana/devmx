import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { EventFormat } from '@devmx/shared-api-interfaces';

export class CreateEventDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty({
    type: 'enum',
    enum: ['in-person', 'online', 'mixed'],
    example: 'in-person',
  })
  format: EventFormat;

  @IsString()
  @ApiProperty()
  date: string;

  @IsString()
  @ApiProperty()
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
  @ApiProperty()
  address: string;

  city?: string;

  location?: string;
}
