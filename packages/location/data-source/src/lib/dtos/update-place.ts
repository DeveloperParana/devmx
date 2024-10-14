import { CreateLocationDto } from './create-location';
import { UpdatePlace } from '@devmx/location-domain';
import { CreatePlaceDto } from './create-place';
import { OmitType } from '@nestjs/mapped-types';

export class UpdatePlaceDto
  extends OmitType(CreatePlaceDto, ['location'])
  implements UpdatePlace
{
  id: string;

  location: CreateLocationDto;
}
