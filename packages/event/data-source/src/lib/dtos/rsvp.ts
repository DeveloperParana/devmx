import { AccountRefDto, EventRefDto } from '@devmx/shared-data-source';
import { RSVP, RSVPStatus } from '@devmx/shared-api-interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class RSVPDto implements RSVP {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: () => AccountRefDto })
  @Type(() => AccountRefDto)
  account: AccountRefDto;

  @ApiProperty({ type: () => EventRefDto })
  @Type(() => EventRefDto)
  event: EventRefDto;

  @ApiProperty({
    type: 'enum',
    enum: ['confirmed', 'declined', 'maybe'],
    example: 'confirmed',
  })
  status: RSVPStatus;
}
