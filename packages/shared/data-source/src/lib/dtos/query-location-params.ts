import { ApiPropertyOptional } from '@nestjs/swagger';
import { QueryLocationDto } from './query-location';
import { QueryParamsDto } from './query-params';
import { Type } from 'class-transformer';

export class QueryLocationParamsDto<T> extends QueryParamsDto<T> {
  @ApiPropertyOptional({ type: () => QueryLocationDto })
  @Type(() => QueryLocationDto)
  location?: QueryLocationDto;
}
