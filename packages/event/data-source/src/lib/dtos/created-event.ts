import { CityDto, LocationDto } from '@devmx/location-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PresentationDto } from '@devmx/presentation-data-source';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { UserDto } from '@devmx/account-data-source';
import { Exclude, Type } from 'class-transformer';

export class CreatedEventDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    type: 'enum',
    enum: ['in-person', 'online', 'mixed'],
    example: 'in-person',
  })
  format: EventFormat;

  @ApiProperty()
  @Type(() => Date)
  date: Date;

  @ApiProperty()
  time: string;

  @ApiProperty()
  cover: string;

  @ApiProperty()
  visible: boolean;

  @ApiProperty({ type: () => [PresentationDto] })
  @Type(() => PresentationDto)
  presentations: PresentationDto[];

  @ApiProperty()
  address: string;

  @ApiPropertyOptional({ type: () => CityDto })
  @Type(() => CityDto)
  city?: CityDto;

  @ApiPropertyOptional({ type: () => LocationDto })
  @Type(() => LocationDto)
  location?: LocationDto;

  @Exclude()
  owner: UserDto;
}
