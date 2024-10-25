import { Params } from '@devmx/shared-api-interfaces';
import { JobOpeningFacade } from '../application';
import { filter } from 'rxjs';

export const jobOpeningResolverWrapped = (
  facade: JobOpeningFacade,
  params: Params
) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((jobOpening) => !!jobOpening));
};
