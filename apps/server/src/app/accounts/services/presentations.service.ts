import { Presentation, PresentationComment } from '../schemas';
import {
  PageDto,
  QueryParamsDto,
  CreatePresentationDto,
  UpdatePresentationDto,
  QueryFilterDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
} from '../dtos';

export abstract class PresentationsService {
  abstract create(data: CreatePresentationDto): Promise<Presentation>;

  abstract createComment(
    createPresentationCommentDto: CreatePresentationCommentDto
  ): Promise<PresentationComment>;

  abstract find(
    params: QueryParamsDto<Presentation>
  ): Promise<PageDto<Presentation>>;

  abstract findComments({
    page,
    size,
    filter,
  }: QueryParamsDto<Presentation>): Promise<PageDto<PresentationComment>>;

  abstract findOne(id: string): Promise<Presentation | null>;

  abstract findOneComment(id: string): Promise<PresentationComment | null>;

  abstract findOneBy(
    filter: QueryFilterDto<Presentation>
  ): Promise<Presentation | null>;

  abstract findOneCommentBy(
    filter: QueryFilterDto<PresentationComment>
  ): Promise<PresentationComment | null>;

  abstract update(
    id: string,
    data: UpdatePresentationDto
  ): Promise<Presentation | null>;

  abstract updateComment(
    id: string,
    updatePresentationCommentDto: UpdatePresentationCommentDto
  ): Promise<PresentationComment | null>;

  abstract remove(id: string): Promise<Presentation | null>;

  abstract removeComment(id: string): Promise<PresentationComment | null>;
}
