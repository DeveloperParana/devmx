import { CityDto, LocationDto } from '@devmx/location-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PresentationRefDto } from '@devmx/presentation-data-source';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { AccountRefDto } from '@devmx/shared-data-source';
import { Type } from 'class-transformer';

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

  @ApiProperty({ type: () => [PresentationRefDto] })
  @Type(() => PresentationRefDto)
  presentations: PresentationRefDto[];

  @ApiProperty({ type: () => [AccountRefDto] })
  @Type(() => AccountRefDto)
  leaders: AccountRefDto[];

  @ApiProperty()
  address: string;

  @ApiPropertyOptional({ type: () => CityDto })
  @Type(() => CityDto)
  city?: CityDto;

  @ApiPropertyOptional({ type: () => LocationDto })
  @Type(() => LocationDto)
  location?: LocationDto;

  @ApiProperty({ type: () => AccountRefDto })
  @Type(() => AccountRefDto)
  owner: AccountRefDto;
}
