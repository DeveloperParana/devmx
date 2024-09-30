import { Location } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class LocationDto implements Location {
  @ApiProperty()
  type: 'Point';

  @ApiProperty()
  coordinates: [number, number];
}
