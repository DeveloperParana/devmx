import { FindFilter } from '@devmx/shared-api-interfaces';
import { FindFilterDto } from './find-filter';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class FindParamsDto<T> {
  @ApiProperty({ minimum: 0, default: 0 })
  page?: number = 0;

  @ApiProperty({ minimum: 1, default: 10 })
  size?: number = 10;

  @ApiProperty({ type: () => FindFilterDto<T> })
  @Type(() => FindFilterDto<T>)
  filter?: FindFilter<T> = {};
}
