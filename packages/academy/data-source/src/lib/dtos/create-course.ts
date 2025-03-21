import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRefDto } from '@devmx/shared-data-source';
import { CreateCourse } from '@devmx/academy-domain';
import { CourseSubjectDto } from './course-subject';
import { InstitutionDto } from './institution';
import { Type } from 'class-transformer';
import {
  IsUrl,
  IsString,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from 'class-validator';

export class CreateCourseDto implements CreateCourse {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  goal: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  ead: boolean;

  @ValidateNested({ each: true })
  @Type(() => CourseSubjectDto)
  @ApiProperty({ type: () => [CourseSubjectDto] })
  subjects: CourseSubjectDto[] = [];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InstitutionDto)
  @ApiProperty({ type: () => InstitutionDto })
  institution: InstitutionDto;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  details?: string;

  @IsUrl()
  @IsOptional()
  @ApiPropertyOptional()
  link?: string;

  @IsOptional()
  @Type(() => UserRefDto)
  @ApiPropertyOptional({ type: () => [UserRefDto] })
  contributors: UserRefDto[] = [];

  owner: string;
}
