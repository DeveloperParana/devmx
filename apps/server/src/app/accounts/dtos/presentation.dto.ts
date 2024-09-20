import { ApiProperty } from '@nestjs/swagger';
import { PresentationFormat } from '../entities';
import { AccountDto } from './account.dto';
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

  @Type(() => AccountDto)
  @ApiProperty({ type: () => AccountDto })
  account: AccountDto;
}
