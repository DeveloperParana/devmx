import { Place } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location';
import { Type } from 'class-transformer';
import { AccountRefDto } from '@devmx/shared-data-source';

export class PlaceDto implements Place {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: 'Sumério Cervejas Especiais' })
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty({ type: () => LocationDto })
  @Type(() => LocationDto)
  location: LocationDto;

  @ApiProperty({ type: () => AccountRefDto })
  @Type(() => AccountRefDto)
  creator: AccountRefDto;
}
