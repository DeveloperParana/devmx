import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '@devmx/shared-ui-global';
import { ErrorHandler, inject } from '@angular/core';
import { Router } from '@angular/router';

export class AuthErrorHandler implements ErrorHandler {
  router;

  messageService;

  constructor() {
    this.router = inject(Router);

    this.messageService = inject(MessageService);

    onstorage = this.#onTokenChanged;
  }

  #onTokenChanged = ({ key, newValue }: StorageEvent) => {
    if (key === 'accessToken' && !newValue) {
      this.router.navigateByUrl('/conta/auth');
    }
  };

  handleError(error: Error): void {
    if (error instanceof HttpErrorResponse) {
      const { message } = error.error;

      this.showMessage(error.status, message);

      if (error.status === 401) {
        this.router.navigateByUrl('/conta/auth');
        localStorage.removeItem('accessToken');
      }
    }
  }

  showMessage(status: number, message: string) {
    const type = status >= 400 && status < 500 ? 'error' : 'warn';
    this.messageService.open({ message, type });
  }
}
