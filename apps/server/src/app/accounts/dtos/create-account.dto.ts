import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Gender } from '../../shared';
import { NameDto } from './name.dto';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAccountDto {
  @Type(() => NameDto)
  @ApiProperty({ type: () => NameDto })
  name: NameDto;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsOptional()
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
    example: 'male'
  })
  gender?: Gender;

  photo?: string;

  @IsString()
  @IsOptional()
  @MaxLength(512)
  @ApiPropertyOptional()
  minibio?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  birthday?: string;

  @IsBoolean()
  @ApiProperty()
  active: boolean;
}
