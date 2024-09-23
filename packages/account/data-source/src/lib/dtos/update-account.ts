import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';
import { UpdateAccount } from '@devmx/account-domain';
import { Gender } from '@devmx/shared-api-interfaces';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { NameDto } from './name';

export class UpdateAccountDto implements UpdateAccount {
  id: string;

  @Type(() => NameDto)
  @ApiPropertyOptional({ type: () => NameDto })
  name?: NameDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  username?: string;

  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  gender?: Gender | undefined;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  photo?: string | undefined;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  minibio?: string | undefined;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  birthday?: string | undefined;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  active?: boolean;
}
