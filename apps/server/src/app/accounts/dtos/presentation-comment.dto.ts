import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { AccountDto } from './account.dto';

export class PresentationCommentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @Type(() => AccountDto)
  @ApiProperty({ type: () => AccountDto })
  account: AccountDto;
}
