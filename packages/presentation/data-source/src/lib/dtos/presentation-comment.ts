import { UserDto } from '@devmx/account-data-source';
import { PresentationDto } from './presentation';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationCommentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  text: string;

  @Type(() => PresentationDto)
  @ApiProperty({ type: () => PresentationDto })
  presentation: PresentationDto;

  @Type(() => UserDto)
  @ApiProperty({ type: () => UserDto })
  owner: UserDto;
}
