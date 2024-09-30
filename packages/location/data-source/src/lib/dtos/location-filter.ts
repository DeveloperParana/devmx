import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LocationFilter } from '@devmx/location-domain';
import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class LocationFilterDto implements LocationFilter {
  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  lat: number;

  @IsNumber()
  @ApiProperty()
  @Type(() => Number)
  lng: number;

  @IsNumber()
  @ApiProperty({ default: 10000 })
  @Type(() => Number)
  max: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({ default: 0 })
  min?: number = 0;
}
