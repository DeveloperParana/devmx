import { CreateCourseDto } from './create-course';
import { OmitType } from '@nestjs/swagger';

export class UpdateCourseDto extends OmitType(CreateCourseDto, ['id']) {
  id: string;
}
