import { CreatePresentation } from '../dtos';
import {
  Page,
  Presentation,
  QueryFilter,
  QueryParams,
} from '@devmx/shared-api-interfaces';

// prettier-ignore
export abstract class PresentationsService {
  abstract create(data: CreatePresentation): Promise<Presentation>;

  abstract find(params: QueryParams<Presentation>): Promise<Page<Presentation>>;

  abstract findOne(id: string): Promise<Presentation | null>;

  abstract findOneBy(filter: QueryFilter<Presentation>): Promise<Presentation | null>;

  abstract update(id: string, data: Partial<Presentation>): Promise<Presentation | null>;

  abstract remove(id: string): Promise<Presentation | null>;
}
