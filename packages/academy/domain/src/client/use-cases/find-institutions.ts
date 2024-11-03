import { InstitutionService } from '../services';
import {
  Page,
  UseCase,
  Institution,
  QueryParams,
} from '@devmx/shared-api-interfaces';

export class FindInstitutionsUseCase
  implements UseCase<QueryParams<Institution>, Page<Institution>>
{
  constructor(private institutionService: InstitutionService) {}

  execute(params: QueryParams<Institution>) {
    return this.institutionService.find(params);
  }
}
