import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountRef, Name } from '@devmx/shared-api-interfaces';

export class AccountRefDto implements AccountRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: Name;

  @ApiProperty()
  username: string;

  @ApiPropertyOptional()
  photo?: string;
}
