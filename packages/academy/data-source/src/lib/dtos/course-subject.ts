import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CourseSubject } from '@devmx/shared-api-interfaces';
import { SubjectDto } from './subject';
import { Type } from 'class-transformer';

export class CourseSubjectDto implements CourseSubject {
  id: string;

  @ApiPropertyOptional()
  instructor?: string;

  @ApiPropertyOptional()
  hours?: number;

  @Type(() => SubjectDto)
  @ApiProperty({ type: () => SubjectDto })
  subject: SubjectDto;
}
