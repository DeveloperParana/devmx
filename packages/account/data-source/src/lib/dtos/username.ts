import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UsernameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}
