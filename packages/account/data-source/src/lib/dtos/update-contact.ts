import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UpdateContact } from '@devmx/account-domain';

export class UpdateContactDto implements UpdateContact {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  phone?: string;
}
