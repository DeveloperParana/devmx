import { QueryFilterDto } from './query-filter.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { QueryFilter } from '../types';

export class QueryParamsDto<T> {
  @ApiProperty({ minimum: 0, default: 0 })
  page?: number = 0;

  @ApiProperty({ minimum: 1, default: 10 })
  size?: number = 10;

  @ApiProperty({ type: () => QueryFilterDto<T> })
  @Type(() => QueryFilterDto<T>)
  filter?: QueryFilter<T> = {};
}
