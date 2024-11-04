import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserContact } from '@devmx/shared-api-interfaces';

export class UserContactDto implements UserContact {
  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  phone?: string;
}
