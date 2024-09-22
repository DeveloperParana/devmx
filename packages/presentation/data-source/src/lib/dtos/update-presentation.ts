import { CreatePresentationDto } from './create-presentation';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresentationDto extends PartialType(CreatePresentationDto) {}
