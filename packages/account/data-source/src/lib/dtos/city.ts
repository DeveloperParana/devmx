import { City } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CityDto implements City {
  @ApiProperty()
  id: string;

  @ApiProperty()
  ibge: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lat: number;

  @ApiProperty()
  lng: number;

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
