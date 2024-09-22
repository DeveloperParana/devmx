import {
  Page,
  Creatable,
  QueryFilter,
  QueryParams,
  PresentationComment,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationCommentsService {
  abstract create(data: Creatable<PresentationComment>): Promise<PresentationComment>;

  abstract find(params: QueryParams<PresentationComment>): Promise<Page<PresentationComment>>;

  abstract findOne(id: string): Promise<PresentationComment | null>;

  abstract findOneBy(filter: QueryFilter<PresentationComment>): Promise<PresentationComment | null>;

  abstract update(id: string, data: Partial<PresentationComment>): Promise<PresentationComment | null>;

  abstract remove(id: string): Promise<PresentationComment | null>;
}
