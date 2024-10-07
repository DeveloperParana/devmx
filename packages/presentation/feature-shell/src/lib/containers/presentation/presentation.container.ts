import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PresentationCommentComponent } from '../../components';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import {
  inject,
  OnInit,
  Component,
  viewChild,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  param,
  PhotoPipe,
  ImageComponent,
  AvatarComponent,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    RouterModule,
    MatIconModule,
    MatChipsModule,
    ImageComponent,
    AvatarComponent,
    MatPaginatorModule,
    PresentationCommentComponent,
    MatCardModule,
    MatListModule,
    PhotoPipe,
  ],
  standalone: true,
})
export class PresentationContainer implements OnInit {
  #destroyRef = inject(DestroyRef);

  presentationFacade = inject(PresentationFacade);
  presentationCommentFacade = inject(PresentationCommentFacade);

  presentationCommentChild = viewChild(PresentationCommentComponent);
  get presentationComment() {
    return this.presentationCommentChild();
  }

  route = inject(ActivatedRoute);

  presentation = '';

  ngOnInit() {
    const id$ = this.route.paramMap.pipe(param('id'));

    id$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((id) => {
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
