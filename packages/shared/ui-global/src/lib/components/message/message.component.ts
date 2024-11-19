import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { MessageData } from './message-data';
import { NgClass } from '@angular/common';
import {
  MatSnackBarRef,
  MatSnackBarLabel,
  MatSnackBarAction,
  MatSnackBarActions,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';

@Component({
  selector: 'devmx-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
  imports: [
    NgClass,
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
})
export class MessageComponent {
  data = inject<MessageData>(MAT_SNACK_BAR_DATA);

  messageRef = inject<MatSnackBarRef<MessageComponent>>(MatSnackBarRef);
}
