import { PresentationReactionType } from '@devmx/shared-api-interfaces';
import { AccountDto } from '@devmx/account-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationReactionDto {
  @ApiProperty()
  id: string;

  @ApiProperty({
    type: 'enum',
    enum: [
      'claps',
      'mindblowing',
      'insightful',
      'amazing',
      'interesting',
      'learnedSomething',
      'like',
    ],
    default: 'claps',
    example: 'mindblowing',
  })
  type: PresentationReactionType;

  @Type(() => AccountDto)
  @ApiProperty({ type: () => AccountDto })
  account: AccountDto;
}
