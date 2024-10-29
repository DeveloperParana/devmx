import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RSVPStatus } from '@devmx/shared-api-interfaces';
import { CreateRSVP } from '@devmx/event-domain';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRSVPDto implements CreateRSVP {
  @IsOptional()
  @ApiPropertyOptional()
  account: string;

  @IsOptional()
  @ApiPropertyOptional()
  event: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['confirmed', 'declined', 'maybe'],
    example: 'confirmed',
  })
  status: RSVPStatus;
}
