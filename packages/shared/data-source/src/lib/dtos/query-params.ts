import { QueryFilter, QueryParams } from '@devmx/shared-api-interfaces';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { QueryLocationDto } from './query-location';
import { QueryFilterDto } from './query-filter';
import { Type } from 'class-transformer';

export class QueryParamsDto<T> implements QueryParams<T> {
  @ApiPropertyOptional({ minimum: 0, default: 0 })
  page?: number = 0;

  @ApiPropertyOptional({ minimum: 1, default: 10 })
  size?: number = 10;

  @ApiPropertyOptional({ type: () => QueryFilterDto<T> })
  @Type(() => QueryFilterDto<T>)
  filter?: QueryFilter<T> = {};

  @ApiPropertyOptional({ type: () => QueryLocationDto })
  @Type(() => QueryLocationDto)
  location?: QueryLocationDto;
}
