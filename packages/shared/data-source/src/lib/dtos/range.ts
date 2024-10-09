import { Range } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class RangeDto implements Range {
  @ApiProperty({ type: Number, minimum: 0, default: 0 })
  min = 0;

  @ApiProperty({ type: Number, minimum: 0 })
  max: number;
}
