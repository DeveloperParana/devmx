import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AvatarComponent, param } from '@devmx/shared-ui-global';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { take } from 'rxjs';
import {
  PresentationFacade,
  PresentationCommentFacade,
} from '@devmx/presentation-data-access';

@Component({
  selector: 'devmx-presentation',
  templateUrl: './presentation.container.html',
  styleUrl: './presentation.container.scss',
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterModule,
    MatChipsModule,
    AvatarComponent,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
  ],
  standalone: true,
})
export class PresentationContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);
  presentationCommentFacade = inject(PresentationCommentFacade);

  id$ = inject(ActivatedRoute).paramMap.pipe(param('id'));

  presentation = '';

  ngOnInit() {
    this.id$.pipe(take(1)).subscribe((id) => {
      if (id) this.loadPresentation(id);
    });
  }

  loadPresentation(id: string) {
    this.presentation = id;
    this.presentationFacade.loadOne(id);
    this.presentationCommentFacade.load(id);
  }

  onPageChange(event: PageEvent) {
    this.presentationCommentFacade.load(
      this.presentation,
      event.pageIndex,
      event.pageSize
    );
  }
}
