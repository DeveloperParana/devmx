import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { UserDto } from '@devmx/account-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PresentationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    type: 'enum',
    enum: ['talk', 'workshop', 'webinar'],
    example: 'talk',
  })
  format: PresentationFormat;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  resources: string[];

  @ApiProperty()
  visible: boolean;

  @ApiPropertyOptional()
  link?: string;

  @ApiPropertyOptional()
  cover: string;

  @ApiProperty()
  video: string;

  @Type(() => UserDto)
  @ApiProperty({ type: () => UserDto })
  owner: UserDto;
}
