import { UserRef } from '@devmx/shared-api-interfaces';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class UserRefDto implements UserRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  displayName: string;
}


console.log(getSchemaPath(UserRefDto));
