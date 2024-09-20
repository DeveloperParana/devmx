import { PresentationReactionType } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { AccountDto } from './account.dto';

export class CreatedPresentationReactionDto {
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

  @Exclude()
  account: AccountDto;
}
