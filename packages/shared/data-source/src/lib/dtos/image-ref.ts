import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ImageRef } from '@devmx/shared-api-interfaces';

export class ImageRefDto implements ImageRef {
  @ApiProperty()
  src = '';

  @ApiPropertyOptional()
  alt?: string;
}
