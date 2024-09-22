import { CreatePresentationCommentDto } from './create-presentation-comment';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresentationCommentDto extends PartialType(
  CreatePresentationCommentDto
) {}
