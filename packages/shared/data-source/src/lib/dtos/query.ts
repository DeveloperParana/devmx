import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import {
  Query,
  SortDirection,
  FilterOperator,
} from '@devmx/shared-api-interfaces';

export class QueryDto<T> implements Query<T> {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  limit: number;

  @IsOptional()
  @ApiPropertyOptional()
  sort: Record<keyof T, SortDirection>;

  @IsOptional()
  @ApiPropertyOptional()
  filters: { [K in keyof T]: FilterOperator<T[K]> };
}
