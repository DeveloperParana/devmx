import { CopyEvent } from '@devmx/shared-api-interfaces';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CopyEventDto implements CopyEvent {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;
}
