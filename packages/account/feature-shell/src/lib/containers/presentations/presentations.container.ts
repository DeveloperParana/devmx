import { PresentationFacade } from '@devmx/presentation-data-access';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    AsyncPipe
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  ngOnInit() {
    this.presentationFacade.load();
  }
}
