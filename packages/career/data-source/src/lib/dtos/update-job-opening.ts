import { EditableJobOpening } from '@devmx/shared-api-interfaces';
import { CreateJobOpeningDto } from './create-job-opening';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateJobOpeningDto
  extends OmitType(CreateJobOpeningDto, ['id'])
  implements EditableJobOpening
{
  id: string;
}
