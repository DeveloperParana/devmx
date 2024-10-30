import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { LayoutToolbar } from './toolbar';
import {
  inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule, IconComponent, MatListModule, AsyncPipe],
  standalone: true,
})
export class LayoutToolbarComponent {
  toolbar = inject(LayoutToolbar);

  year = new Date().getFullYear();
}
