import { Params } from '@devmx/shared-api-interfaces';
import { PresentationFacade } from '../application';
import { filter } from 'rxjs';

export const presentationResolverWrapped = (
  facade: PresentationFacade,
  params: Params
) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((presentation) => !!presentation));
};
