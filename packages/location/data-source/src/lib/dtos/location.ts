import { Location } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class LocationDto implements Location {
  id: string

  @ApiProperty({ type: 'enum', enum: ['Point'], default: 'Point' })
  type: 'Point';

  @ApiProperty({ type: Array<number>, example: [-23.451193, -51.954461] })
  coordinates: [number, number];
}
