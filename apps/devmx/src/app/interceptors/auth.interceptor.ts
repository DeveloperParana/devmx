import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userToken = localStorage.getItem('accessToken');

  let cloneOptions;

  if (userToken) {
    cloneOptions = {
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    };
  } else {
    cloneOptions = {};
  }

  const clonedReq = req.clone(cloneOptions);

  return next(clonedReq);
};
