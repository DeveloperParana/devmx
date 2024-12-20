import { PresentationRefDto } from '@devmx/presentation-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EventFormat } from '@devmx/shared-api-interfaces';
import { UserRefDto } from '@devmx/shared-data-source';
import { CreateEvent } from '@devmx/event-domain';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEventDto implements CreateEvent {
  id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: ['in-person', 'online', 'mixed'],
    example: 'in-person',
  })
  format: EventFormat;

  @IsDate({ message: 'Data inválida' })
  @ApiProperty()
  @Type(() => Date)
  date: Date;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  cover?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional()
  visible = false;

  @ApiProperty({ type: () => [PresentationRefDto] })
  @Type(() => PresentationRefDto)
  presentations: PresentationRefDto[];

  @ApiProperty({ type: () => [UserRefDto] })
  @Type(() => UserRefDto)
  leaders: UserRefDto[];

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  address: string;

  owner: string;
}
