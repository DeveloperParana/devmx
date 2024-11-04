import { UserRefDto } from '@devmx/shared-data-source';
import { Place } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location';
import { Type } from 'class-transformer';

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

  @ApiProperty({ type: () => UserRefDto })
  @Type(() => UserRefDto)
  creator: UserRefDto;
}
