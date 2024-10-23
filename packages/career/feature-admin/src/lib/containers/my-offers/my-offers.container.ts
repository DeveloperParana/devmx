import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-my-offers',
  templateUrl: './my-offers.container.html',
  styleUrl: './my-offers.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class MyOffersContainer {}
