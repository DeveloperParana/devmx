import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PresentationRef } from '@devmx/shared-api-interfaces';
import { UserRefDto } from '@devmx/shared-data-source';
import { Type } from 'class-transformer';

export class PresentationRefDto implements PresentationRef {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiPropertyOptional()
  cover?: string;

  @ApiProperty({ type: () => UserRefDto })
  @Type(() => UserRefDto)
  owner: UserRefDto;
}
