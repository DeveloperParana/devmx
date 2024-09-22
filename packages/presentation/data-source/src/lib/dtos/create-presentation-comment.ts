import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePresentationCommentDto {
  @IsString()
  @ApiProperty()
  text: string;

  presentation: string;

  account: string;
}
