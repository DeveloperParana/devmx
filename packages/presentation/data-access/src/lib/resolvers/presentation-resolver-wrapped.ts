import { Params } from '@devmx/shared-api-interfaces';
import { PresentationFacade } from '../facades';
import { filter } from 'rxjs';

export const presentationResolverWrapped = (
  facade: PresentationFacade,
  params: Params
) => {
  facade.loadOne(params['id']);
  return facade.presentation$.pipe(filter((presentation) => !!presentation));
};
