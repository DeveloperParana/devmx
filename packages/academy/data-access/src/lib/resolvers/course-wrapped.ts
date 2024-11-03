import { Params } from '@devmx/shared-api-interfaces';
import { CourseFacade } from '../application';
import { filter } from 'rxjs';

export const courseResolverWrapped = (facade: CourseFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((course) => !!course));
};
