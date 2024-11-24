import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRefDto, RangeDto } from '@devmx/shared-data-source';
import { JobSkillDto } from './job-skill';
import { Exclude, Type } from 'class-transformer';
import {
  JobMode,
  JobType,
  JobOpening,
  JobContract,
  ExperienceLevel,
} from '@devmx/shared-api-interfaces';

export class CreatedJobOpeningDto implements JobOpening {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
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

  @Type(() => JobSkillDto)
  @ApiProperty({ type: () => [JobSkillDto] })
  skills: JobSkillDto[];

  @ApiPropertyOptional()
  benefits?: string;

  @Type(() => Array<RangeDto>)
  @ApiPropertyOptional({ type: () => RangeDto })
  salary?: RangeDto;

  @ApiPropertyOptional()
  contact?: string;

  @ApiPropertyOptional()
  company?: string;

  @ApiPropertyOptional()
  link?: string;

  @ApiPropertyOptional()
  open: boolean;

  @ApiPropertyOptional()
  active: boolean;

  @Exclude()
  owner: UserRefDto;
}
