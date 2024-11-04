import { PresentationReactionType } from '@devmx/shared-api-interfaces';
import { UserDto } from '@devmx/account-data-source';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationReactionDto {
  @ApiProperty()
  id: string;

  @ApiProperty({
    type: 'enum',
    enum: ['claps', 'mindblowing', 'insightful', 'amazing', 'learned', 'cool'],
    default: 'claps',
    example: 'mindblowing',
  })
  type: PresentationReactionType;

  @Type(() => UserDto)
  @ApiProperty({ type: () => UserDto })
  owner: UserDto;
}
