import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PreesntationComponent } from './components';
import { PresentationFacade } from '../accounts';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  viewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'devmx-presentations',
  templateUrl: './presentations.container.html',
  styleUrl: './presentations.container.scss',
  imports: [
    AsyncPipe,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink,
    PreesntationComponent,
  ],
  standalone: true,
})
export class PresentationsContainer implements OnInit, AfterViewInit {
  presentationFacade = inject(PresentationFacade);

  presentationChild = viewChild(PreesntationComponent);
  get presentation() {
    return this.presentationChild();
  }

  ngOnInit() {
    this.presentationFacade.loadPresentations();
  }

  ngAfterViewInit() {
    console.log(this.presentation);
  }

  onSubmitted(presentation: Presentation) {
    console.log(presentation);

    if (presentation.id) {
      this.presentationFacade.update(presentation);
    } else {
      this.presentationFacade.create(presentation);
    }
  }

  edit(presentation: Presentation) {
    console.log(presentation);

    if (this.presentation) {
      this.presentation.form.fill(presentation);
    }
  }
}
