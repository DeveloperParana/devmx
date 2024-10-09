import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RangeDto } from '@devmx/shared-data-source';
import { CreateJob } from '@devmx/career-domain';
import { Type } from 'class-transformer';
import {
  IsUrl,
  IsArray,
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import {
  Range,
  JobMode,
  JobType,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export class CreateJobDto implements CreateJob {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ type: [String] })
  requirements: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'enum', enum: ['junior', 'mid', 'senior'] })
  experience: ExperienceLevel;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'enum', enum: ['CLT', 'PJ'] })
  contract: JobContract;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['full-time', 'part-time', 'contract', 'freelance'],
  })
  type: JobType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: 'enum', enum: ['office', 'remote', 'hybrid'] })
  mode: JobMode;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({ type: [String] })
  benefits?: string[];

  @IsOptional()
  @Type(() => RangeDto)
  @ApiPropertyOptional({ type: () => RangeDto })
  salary?: Range;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  city?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  contact?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  company?: string;

  @IsUrl()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  link?: string;

  owner: string;
}
