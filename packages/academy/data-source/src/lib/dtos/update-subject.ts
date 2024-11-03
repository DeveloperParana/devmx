import { CreateSubjectDto } from './create-subject';
import { OmitType } from '@nestjs/swagger';

export class UpdateSubjectDto extends OmitType(CreateSubjectDto, ['id']) {
  id: string;
}
