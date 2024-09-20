import { CreatePresentationCommentDto } from './create-presentation-comment.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePresentationCommentDto extends PartialType(CreatePresentationCommentDto) {}
