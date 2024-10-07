import { QueryLocation } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class QueryLocationDto implements QueryLocation {
  @ApiProperty({ type: Number, minimum: 0, default: 0.0 })
  lat = 0.0;

  @ApiProperty({ type: Number, minimum: 0, default: 0.0 })
  lng = 0.0;

  @ApiProperty({ type: Number, minimum: 0, default: 0 })
  min = 0;

  @ApiProperty({ type: Number, minimum: 0, default: 100000 })
  max = 100000;
}
