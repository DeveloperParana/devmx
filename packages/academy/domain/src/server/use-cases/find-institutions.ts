import { InstitutionsService } from '../services';
import {
  Page,
  UseCase,
  Institution,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindInstitutionsUseCase
  implements UseCase<QueryParams<Institution>, Page<Institution>>
{
  constructor(private institutionsService: InstitutionsService) {}

  async execute(params: QueryParams<Institution>) {
    return this.institutionsService.find(params);
  }
}
