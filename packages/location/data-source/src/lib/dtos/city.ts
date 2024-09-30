import { City } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location';

export class CityDto implements City {
  @ApiProperty()
  id: string;

  @ApiProperty()
  ibge: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  location: LocationDto;

  @ApiProperty()
  capital: boolean;

  @ApiProperty()
  ibgeState: number;

  @ApiProperty()
  siafi: number;

  @ApiProperty()
  ddd: number;

  @ApiProperty()
  timeZone: string;
}
