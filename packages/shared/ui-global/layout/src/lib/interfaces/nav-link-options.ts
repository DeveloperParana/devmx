import { Role } from '@devmx/shared-api-interfaces';
import { Icon } from '@devmx/shared-ui-global/icon';
import { Subject } from 'rxjs';

export type PathSegment = string | number;

export interface NavLinkOptions {
  route: PathSegment[];
  label: string;
  icon?: Icon;
  meta?: Icon;
  badge?: Subject<number>;
  roles?: Role[];
}
