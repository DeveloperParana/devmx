import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidenavItem } from '../sidenav';
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
} from '@angular/material/list';

@Component({
  selector: 'devmx-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatListItem, MatListItemIcon, MatListItemTitle, RouterLink],
  standalone: true,
})
export class SidenavItemComponent {
  item = input.required<SidenavItem>();
}
