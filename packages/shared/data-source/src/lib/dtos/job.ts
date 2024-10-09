import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountRefDto } from './account-ref';
import { Type } from 'class-transformer';
import { CityRefDto } from './city-ref';
import { RangeDto } from './range';
import {
  JobOut,
  JobMode,
  JobType,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export class JobDto implements JobOut {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  requirements: string;

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

  @ApiPropertyOptional({ type: String })
  benefits?: string;

  @Type(() => RangeDto)
  @ApiPropertyOptional({ type: () => RangeDto })
  salary?: RangeDto;

  @Type(() => CityRefDto)
  @ApiPropertyOptional({ type: () => CityRefDto })
  city?: CityRefDto;

  @ApiPropertyOptional({ type: String })
  contact?: string;

  @ApiPropertyOptional({ type: String })
  company?: string;

  @ApiPropertyOptional({ type: String })
  link?: string;

  @ApiProperty({ type: Boolean })
  active: boolean;

  @Type(() => AccountRefDto)
  @ApiProperty({ type: () => AccountRefDto })
  owner: AccountRefDto;
}
