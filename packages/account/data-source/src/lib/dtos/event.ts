import { CityDto, LocationDto } from '@devmx/location-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';
import { AccountDto } from './account';

export class EventDto {
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
  date: string;

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

  @Type(() => AccountDto)
  @ApiProperty({ type: () => AccountDto })
  owner: AccountDto;
}
