import { CreateLocation } from '@devmx/location-domain';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLocationDto implements CreateLocation {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ type: Number })
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ type: Number })
  lng: number;
}
