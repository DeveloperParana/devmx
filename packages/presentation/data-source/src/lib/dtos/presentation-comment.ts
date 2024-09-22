import { AccountDto } from '@devmx/account-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationCommentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @Type(() => AccountDto)
  @ApiProperty({ type: () => AccountDto })
  account: AccountDto;
}
