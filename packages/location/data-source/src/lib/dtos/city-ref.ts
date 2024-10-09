import { CityRef } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location';
import { Type } from 'class-transformer';

export class CityRefDto implements CityRef {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'Maringá' })
  name: string;

  @ApiProperty({ type: () => LocationDto })
  @Type(() => LocationDto)
  location: LocationDto;

  @ApiProperty({ example: 'America/Sao_Paulo' })
  timeZone: string;
}
