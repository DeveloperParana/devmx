import { Params } from '@devmx/shared-api-interfaces';
import { SkillFacade } from '../ports';
import { filter } from 'rxjs';

export const skillResolverWrapped = (facade: SkillFacade, params: Params) => {
  facade.loadOne(params['id']);
  return facade.selected$.pipe(filter((skill) => !!skill));
};
