import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { UserDto } from '@devmx/account-data-source';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class CreatedPresentationDto {
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

  @ApiPropertyOptional()
  link: string;

  @ApiPropertyOptional()
  cover: string;

  @ApiPropertyOptional()
  video: string;

  @ApiProperty()
  visible: boolean;

  @Exclude()
  owner: UserDto;
}
