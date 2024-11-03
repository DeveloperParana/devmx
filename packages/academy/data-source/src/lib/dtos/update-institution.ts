import { CreateInstitutionDto } from './create-institution';
import { OmitType } from '@nestjs/swagger';

export class UpdateInstitutionDto extends OmitType(CreateInstitutionDto, [
  'id',
]) {
  id: string;
}
