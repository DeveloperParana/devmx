import { Params } from '@devmx/shared-api-interfaces';
import { JobFacade } from '../facades';
import { filter } from 'rxjs';

export const jobResolverWrapped = (facade: JobFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.job$.pipe(filter((job) => !!job));
};
