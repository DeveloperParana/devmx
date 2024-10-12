import { Params } from '@devmx/shared-api-interfaces';
import { AboutFacade } from '../facades';
import { filter } from 'rxjs';

export const aboutResolverWrapped = (facade: AboutFacade, params: Params) => {
  facade.findAccount(params['username']);
  return facade.account$.pipe(filter((account) => !!account));
};
