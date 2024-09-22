import {
  Page,
  Creatable,
  QueryFilter,
  QueryParams,
  PresentationReaction,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationReactionsService {
  abstract create(data: Creatable<PresentationReaction>): Promise<PresentationReaction>;

  abstract find(params: QueryParams<PresentationReaction>): Promise<Page<PresentationReaction>>;

  abstract findOne(id: string): Promise<PresentationReaction | null>;

  abstract findOneBy(filter: QueryFilter<PresentationReaction>): Promise<PresentationReaction | null>;

  abstract update(id: string, data: Partial<PresentationReaction>): Promise<PresentationReaction | null>;

  abstract remove(id: string): Promise<PresentationReaction | null>;
}
