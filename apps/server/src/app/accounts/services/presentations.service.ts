import { PageDto, QueryFilterDto, QueryParamsDto } from '../../shared/dtos';
import {
  Presentation,
  PresentationComment,
  PresentationReaction,
} from '../schemas';
import {
  CreatePresentationDto,
  UpdatePresentationDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  CreatePresentationReactionDto,
  UpdatePresentationReactionDto,
} from '../dtos';

export abstract class PresentationsService {
  abstract create(data: CreatePresentationDto): Promise<Presentation>;

  abstract createComment(
    createPresentationCommentDto: CreatePresentationCommentDto
  ): Promise<PresentationComment>;

  abstract createReaction(
    createPresentationReactionDto: CreatePresentationReactionDto
  ): Promise<PresentationReaction>;

  abstract find(
    params: QueryParamsDto<Presentation>
  ): Promise<PageDto<Presentation>>;

  abstract findComments({
    page,
    size,
    filter,
  }: QueryParamsDto<Presentation>): Promise<PageDto<PresentationComment>>;

  abstract findReactions(
    filter: QueryFilterDto<Presentation>
  ): Promise<PresentationReaction[]>;

  abstract findOne(id: string): Promise<Presentation | null>;

  abstract findOneComment(id: string): Promise<PresentationComment | null>;

  abstract findOneReaction(id: string): Promise<PresentationReaction | null>;

  abstract findOneBy(
    filter: QueryFilterDto<Presentation>
  ): Promise<Presentation | null>;

  abstract findOneCommentBy(
    filter: QueryFilterDto<PresentationComment>
  ): Promise<PresentationComment | null>;

  abstract findOneReactionBy(
    filter: QueryFilterDto<PresentationReaction>
  ): Promise<PresentationReaction | null>;

  abstract update(
    id: string,
    data: UpdatePresentationDto
  ): Promise<Presentation | null>;

  abstract updateComment(
    id: string,
    updatePresentationCommentDto: UpdatePresentationCommentDto
  ): Promise<PresentationComment | null>;

  abstract updateReaction(
    id: string,
    updatePresentationReactionDto: UpdatePresentationReactionDto
  ): Promise<PresentationReaction | null>;

  abstract remove(id: string): Promise<Presentation | null>;

  abstract removeComment(id: string): Promise<PresentationComment | null>;

  abstract removeReaction(id: string): Promise<PresentationReaction | null>;
}
