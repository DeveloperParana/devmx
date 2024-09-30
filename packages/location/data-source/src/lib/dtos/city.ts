import { City } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location';
import { Type } from 'class-transformer';

export class CityDto implements City {
  @ApiProperty()
  id: string;

  @ApiProperty()
  ibge: number;

  @ApiProperty({ example: 'Maringá' })
  name: string;

  @ApiProperty({ type: () => LocationDto })
  @Type(() => LocationDto)
  location: LocationDto;

  @ApiProperty()
  capital: boolean;

  @ApiProperty()
  ibgeState: number;

  @ApiProperty()
  siafi: number;

  @ApiProperty({ example: 44 })
  ddd: number;

  @ApiProperty({ example: 'America/Sao_Paulo' })
  timeZone: string;
}
