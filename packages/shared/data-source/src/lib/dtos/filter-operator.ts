import { FilterOperator } from '@devmx/shared-api-interfaces';
import { IsOptional } from 'class-validator';

export class FilterOperatorDto<T> implements FilterOperator<T> {
  @IsOptional()
  eq?: T;

  @IsOptional()
  ne?: T;

  @IsOptional()
  gt?: T;

  @IsOptional()
  gte?: T;

  @IsOptional()
  lt?: T;

  @IsOptional()
  lte?: T;

  @IsOptional()
  in?: T[];

  @IsOptional()
  nin?: T[];
}
