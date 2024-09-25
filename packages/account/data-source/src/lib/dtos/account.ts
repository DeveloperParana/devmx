import { AccountRole, Gender } from '@devmx/shared-api-interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { NameDto } from './name';

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

  @ApiPropertyOptional({
    type: 'enum',
    enum: [
      '',
      'male',
      'female',
      'non-binary',
      'gender-fluid',
      'agender',
      'other',
      'prefer-not-to-say',
    ],
    default: '',
    example: 'male',
  })
  gender?: Gender;

  @ApiPropertyOptional()
  photo?: string;

  @ApiPropertyOptional()
  minibio?: string;

  @ApiPropertyOptional()
  birthday?: string;

  @Exclude()
  roles: AccountRole;

  @ApiProperty()
  active: boolean;
}
