import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  const userToken = localStorage.getItem('accessToken');

  if (!userToken) {
    router.navigateByUrl('/conta/auth');
  }

  const clonedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${userToken}`),
  });

  return next(clonedReq);
};
