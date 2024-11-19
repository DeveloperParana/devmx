import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from '../dialog.component';
import { DialogModule } from '@angular/cdk/dialog';

export interface ConfirmDialogData {
  title: string;
  message: string[];
}

@Component({
    selector: 'devmx-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrl: '../dialog.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DialogModule, MatButtonModule, IconComponent]
})
export class ConfirmDialogComponent extends DialogComponent<
  boolean,
  ConfirmDialogComponent,
  ConfirmDialogData
> {}
