import { Gender } from '@devmx/shared-api-interfaces';
import { UpdateProfile } from '@devmx/account-domain';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CityDto } from '@devmx/location-data-source';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProfileDto implements UpdateProfile {
  id: string;

  @IsOptional()
  @ApiPropertyOptional()
  gender?: Gender;

  @IsOptional()
  @ApiPropertyOptional()
  photo?: string;

  @IsOptional()
  @ApiPropertyOptional()
  minibio?: string;

  @IsOptional()
  @ApiPropertyOptional()
  birthday?: Date;

  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => CityDto)
  city?: CityDto;
}
