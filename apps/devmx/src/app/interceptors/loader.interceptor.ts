import { LayoutFacade } from '@devmx/shared-ui-global/layout';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const layout = inject(LayoutFacade);
  layout.setLoader(true);

  return next(req).pipe(finalize(() => layout.setLoader(false)));
};
