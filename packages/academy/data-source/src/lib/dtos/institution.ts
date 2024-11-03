import { Institution } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class InstitutionDto implements Institution {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

}
