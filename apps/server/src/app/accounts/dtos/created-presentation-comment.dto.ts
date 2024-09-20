import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { AccountDto } from './account.dto';

export class CreatedPresentationCommentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @Exclude()
  account: AccountDto;
}
