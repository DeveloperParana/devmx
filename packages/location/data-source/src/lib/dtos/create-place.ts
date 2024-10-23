import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateLocationDto } from './create-location';
import { CreatePlace } from '@devmx/location-domain';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePlaceDto implements CreatePlace {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  address: string;

  @ValidateNested()
  @Type(() => CreateLocationDto)
  @ApiProperty({ type: CreateLocationDto })
  location: CreateLocationDto;

  creator: string;
}
