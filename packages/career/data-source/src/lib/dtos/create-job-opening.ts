import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RangeDto } from '@devmx/shared-data-source';
import { JobSkillDto } from './job-skill';
import { Type } from 'class-transformer';
import {
  JobType,
  JobMode,
  JobContract,
  ExperienceLevel,
  EditableJobOpening,
} from '@devmx/shared-api-interfaces';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateJobOpeningDto implements EditableJobOpening {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['junior', 'mid', 'senior'],
    example: 'senior',
  })
  experience: ExperienceLevel;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['CLT', 'PJ'],
    example: 'CLT',
  })
  contract: JobContract;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['full-time', 'part-time', 'contract', 'freelance'],
    example: 'full-time',
  })
  type: JobType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['office', 'remote', 'hybrid'],
    example: 'remote',
  })
  mode: JobMode;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => JobSkillDto)
  @ApiProperty({ type: () => [JobSkillDto] })
  skills: JobSkillDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  benefits?: string;

  @IsOptional()
  @Type(() => RangeDto)
  @ApiPropertyOptional({ type: () => RangeDto })
  salary?: RangeDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  contact?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  company?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  link?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  open: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  active: boolean;

  owner: string;
}
