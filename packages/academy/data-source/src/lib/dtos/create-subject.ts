import { IsNotEmpty, IsString } from 'class-validator';
import { CreateSubject } from '@devmx/academy-domain';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto implements CreateSubject {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
