import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountRefDto } from '@devmx/shared-data-source';
import { Course } from '@devmx/shared-api-interfaces';
import { CourseSubjectDto } from './course-subject';
import { InstitutionDto } from './institution';
import { Type } from 'class-transformer';

export class CourseDto implements Course {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  goal: string;

  @Type(() => CourseSubjectDto)
  @ApiProperty({ type: () => [CourseSubjectDto] })
  subjects: CourseSubjectDto[] = [];

  @Type(() => InstitutionDto)
  @ApiProperty({ type: () => InstitutionDto })
  institution: InstitutionDto;

  @ApiPropertyOptional()
  details?: string;

  @ApiPropertyOptional()
  link?: string;

  @Type(() => AccountRefDto)
  @ApiPropertyOptional({ type: () => [AccountRefDto] })
  contributors: AccountRefDto[] = [];

  @ApiProperty()
  @Type(() => AccountRefDto)
  owner: AccountRefDto;
}
