import { PresentationReactionType } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { AccountDto } from './account.dto';
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
