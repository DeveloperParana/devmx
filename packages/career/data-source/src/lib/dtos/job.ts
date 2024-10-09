import { AccountRefDto } from '@devmx/account-data-source';
import { CityRefDto } from '@devmx/location-data-source';
import { RangeDto } from '@devmx/shared-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  JobOut,
  JobMode,
  JobType,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export class JobDto implements JobOut {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  requirements: string[];

  @ApiProperty({
    type: 'enum',
    enum: ['junior', 'mid', 'senior'],
    example: 'senior',
  })
  experience: ExperienceLevel;

  @ApiProperty({
    type: 'enum',
    enum: ['CLT', 'PJ'],
    example: 'CLT',
  })
  contract: JobContract;

  @ApiProperty({
    type: 'enum',
    enum: ['full-time', 'part-time', 'contract', 'freelance'],
    example: 'full-time',
  })
  type: JobType;

  @ApiProperty({
    type: 'enum',
    enum: ['office', 'remote', 'hybrid'],
    example: 'remote',
  })
  mode: JobMode;

  @ApiPropertyOptional({ type: [String] })
  benefits?: string[] | undefined;

  @Type(() => RangeDto)
  @ApiPropertyOptional({ type: () => RangeDto })
  salary?: RangeDto;

  @Type(() => CityRefDto)
  @ApiPropertyOptional({ type: () => CityRefDto })
  city?: CityRefDto;

  @ApiPropertyOptional()
  contact?: string;

  @ApiPropertyOptional()
  company?: string;

  @ApiPropertyOptional()
  link?: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @Type(() => AccountRefDto)
  @ApiProperty({ type: () => AccountRefDto })
  owner: AccountRefDto;
}
