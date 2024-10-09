import { PartialType } from '@nestjs/mapped-types';
import { UpdateJob } from '@devmx/career-domain';
import { CreateJobDto } from './create-job';

export class UpdateJobDto
  extends PartialType(CreateJobDto)
  implements UpdateJob
{
  id: string;
}
