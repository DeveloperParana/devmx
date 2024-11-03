import { Params } from '@devmx/shared-api-interfaces';
import { InstitutionFacade } from '../application';
import { filter } from 'rxjs';

export const institutionResolverWrapped = (
  facade: InstitutionFacade,
  params: Params
) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((institution) => !!institution));
};
