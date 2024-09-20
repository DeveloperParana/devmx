import { PresentationReactionType } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationReactionDto {
  @IsString()
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
    example: 'mindblowing'
  })
  type: PresentationReactionType;

  presentation: string;

  account: string;
}
