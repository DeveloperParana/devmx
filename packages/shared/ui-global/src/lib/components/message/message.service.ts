import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from './message.component';
import { inject, Injectable } from '@angular/core';
import { MessageData } from './message-data';

@Injectable({ providedIn: 'root' })
export class MessageService {
  #snackBar = inject(MatSnackBar);

  open(data: MessageData) {
    data.type ??= 'info';
    data.action ??= false;
    const announcementMessage = data.message;
    const options = { data, announcementMessage, duration: 6000 };
    return this.#snackBar.openFromComponent(MessageComponent, options);
  }
}
