import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { Gender } from '../../shared';
import { NameDto } from './name.dto';

export class AccountDto {
  @ApiProperty()
  id: string;

  @Type(() => NameDto)
  @ApiProperty({ type: () => NameDto })
  name: NameDto;

  @ApiProperty()
  username: string;

  @Exclude()
  password: string;

  @ApiProperty()
  email: string;

  @ApiPropertyOptional()
  gender?: Gender;

  @ApiPropertyOptional()
  photo?: string;

  @ApiPropertyOptional()
  minibio?: string;

  @ApiPropertyOptional()
  birthday?: string;

  @ApiProperty()
  active: boolean;
}
