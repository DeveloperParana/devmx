import { ApiPropertyOptional } from '@nestjs/swagger';
import { QueryFilterDto } from './query-filter';
import { QuerySortDto } from './query-sort';
import { Type } from 'class-transformer';
import {
  QueryFilter,
  QueryParams,
  QuerySort,
} from '@devmx/shared-api-interfaces';

export class QueryParamsDto<T> implements QueryParams<T> {
  @ApiPropertyOptional({ minimum: 0, default: 0 })
  page?: number = 0;

  @ApiPropertyOptional({ minimum: 1, default: 10 })
  size?: number = 10;

  @ApiPropertyOptional({ type: () => QueryFilterDto<T> })
  @Type(() => QueryFilterDto<T>)
  filter?: QueryFilter<T> = {};

  @ApiPropertyOptional({ type: () => QuerySortDto<T> })
  @Type(() => QuerySortDto<T>)
  sort?: QuerySort<T> = {};
}
