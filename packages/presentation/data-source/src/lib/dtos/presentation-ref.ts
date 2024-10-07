import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PresentationRef } from '@devmx/shared-api-interfaces';
import { AccountRefDto } from '@devmx/account-data-source';
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

  @ApiProperty({ type: () => AccountRefDto })
  @Type(() => AccountRefDto)
  owner: AccountRefDto;
}
