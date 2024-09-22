import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';

export class AuthErrorHandler implements ErrorHandler {
  router;

  constructor() {
    this.router = inject(Router);
    onstorage = this.#onTokenChanged;
  }

  #onTokenChanged = ({ key, newValue }: StorageEvent) => {
    if (key === 'accessToken' && !newValue) {
      this.router.navigateByUrl('/auth');
    }
  };

  handleError(error: Error): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        localStorage.removeItem('accessToken');
        this.router.navigateByUrl('/auth');
      }
    }
  }
}
