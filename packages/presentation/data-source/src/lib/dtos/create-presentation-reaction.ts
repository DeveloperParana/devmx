import { PresentationReactionType } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationReactionDto {
  @IsString()
  @ApiProperty({
    type: 'enum',
    enum: ['claps', 'mindblowing', 'insightful', 'amazing', 'learned', 'cool'],
    default: 'claps',
    example: 'mindblowing',
  })
  type: PresentationReactionType;

  presentation: string;

  owner: string;
}
