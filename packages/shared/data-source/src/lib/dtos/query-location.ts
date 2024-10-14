import { QueryLocation } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class QueryLocationDto implements QueryLocation {
  @ApiProperty({ type: Number, default: 0.0 })
  @Type(() => Number)
  lat = 0.0;

  @ApiProperty({ type: Number, default: 0.0 })
  @Type(() => Number)
  lng = 0.0;

  @ApiProperty({ type: Number, minimum: 0, default: 0 })
  @Type(() => Number)
  min = 0;

  @ApiProperty({ type: Number, minimum: 0, default: 100000 })
  @Type(() => Number)
  max = 100000;
}
