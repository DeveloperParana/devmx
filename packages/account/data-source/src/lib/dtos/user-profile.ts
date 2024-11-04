import { Gender, UserProfile } from '@devmx/shared-api-interfaces';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CityDto } from '@devmx/location-data-source';
import { Type } from 'class-transformer';

export class UserProfileDto implements UserProfile {
  @ApiPropertyOptional({
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
  })
  gender?: Gender;

  @ApiPropertyOptional()
  photo?: string;

  @ApiPropertyOptional()
  minibio?: string;

  @ApiPropertyOptional()
  birthday?: string;

  @Type(() => CityDto)
  @ApiPropertyOptional({ type: () => [CityDto] })
  city?: CityDto;
}
