import { Component, DestroyRef, inject, OnInit, viewChild } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PresentationCommentComponent } from '../../components';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  param,
  AvatarComponent,
  ImageComponent,
} from '@devmx/shared-ui-global';
import {
  PresentationFacade,
  PresentationComment,
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
    MatIconModule,
    MatChipsModule,
    ImageComponent,
    AvatarComponent,
    MatPaginatorModule,
    PresentationCommentComponent,
    MatCardModule,
    MatListModule,
  ],
  standalone: true,
})
export class PresentationContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);
  presentationCommentFacade = inject(PresentationCommentFacade);

  presentationCommentChild = viewChild(PresentationCommentComponent)
  get presentationComment() {
    return this.presentationCommentChild()
  }

  id$ = inject(ActivatedRoute).paramMap.pipe(param('id'));

  #destroyRef = inject(DestroyRef);

  presentation = '';

  ngOnInit() {
    this.id$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((id) => {
      console.log(id);

      if (id) this.loadPresentation(id);
    });
  }

  loadPresentation(id: string) {
    this.presentation = id;
    this.presentationFacade.loadOne(id);
    this.presentationCommentFacade.load(id);
  }

  onComment(data: PresentationComment) {
    console.log(data);
    this.presentationCommentFacade.create(data);
  }

  onPageChange(event: PageEvent) {
    this.presentationCommentFacade.load(
      this.presentation,
      event.pageIndex,
      event.pageSize
    );
  }
}
