import { CreateInstitution } from '@devmx/academy-domain';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionDto implements CreateInstitution {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
