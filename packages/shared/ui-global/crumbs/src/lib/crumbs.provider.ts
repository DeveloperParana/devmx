import { CrumbsService } from './crumbs.service';
import { Router } from '@angular/router';

export function provideCrumbs() {
  return {
    provide: CrumbsService,
    deps: [Router],
  };
}
