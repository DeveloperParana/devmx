import { CreatePresentationReactionDto } from './create-presentation-reaction';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresentationReactionDto extends PartialType(
  CreatePresentationReactionDto
) {}
