import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmx-home',
  templateUrl: './home.container.html',
  styleUrl: './home.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  standalone: true,
})
export class HomeContainer {}
