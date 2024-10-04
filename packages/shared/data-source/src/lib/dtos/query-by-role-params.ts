import { ApiProperty, PartialType } from '@nestjs/swagger';
import { QueryParamsDto } from './query-params';
import { Role } from '@devmx/shared-api-interfaces';

export class QueryByRoleParamsDto<T>
  extends PartialType(QueryParamsDto)
  implements QueryParamsDto<T>
{
  @ApiProperty({
    type: 'enum',
    enum: [
      'member',
      'speaker',
      'donor',
      'neighbor',
      'leader',
      'staff',
      'fellow',
      'manager',
      'director',
    ],
  })
  role: Role;
}
