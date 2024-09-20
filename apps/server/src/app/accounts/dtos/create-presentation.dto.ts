import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { PresentationFormat } from '../entities';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePresentationDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty({
    type: 'enum',
    enum: ['talk', 'workshop', 'webinar'],
    default: 'talk',
  })
  format: PresentationFormat;

  @IsArray()
  @IsOptional()
  @ApiProperty()
  tags?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty()
  resources?: string[];

  @IsBoolean()
  @ApiProperty()
  visible: boolean;

  account: string;
}
