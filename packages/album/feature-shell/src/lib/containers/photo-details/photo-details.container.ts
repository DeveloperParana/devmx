import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { AsyncPipe, NgPlural, NgPluralCase } from '@angular/common';
import { AuthenticationFacade } from '@devmx/account-data-access';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PhotoFacade } from '@devmx/album-data-access';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {
  of,
  map,
  tap,
  take,
  timer,
  concat,
  filter,
  BehaviorSubject,
} from 'rxjs';
import {
  inject,
  signal,
  Component,
  viewChildren,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  Album,
  Photo,
  UserTag,
  Authentication,
  UpdatePhotoTags,
} from '@devmx/shared-api-interfaces';

@Component({
  selector: 'devmx-photo-details',
  templateUrl: './photo-details.container.html',
  styleUrl: './photo-details.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    IconComponent,
    RouterLink,
    NgPlural,
    NgPluralCase,
    AsyncPipe,
  ],
})
export class PhotoDetailsContainer {
  route = inject(ActivatedRoute);

  authFacade = inject(AuthenticationFacade);

  photoFacade = inject(PhotoFacade);

  tooltips = viewChildren(MatTooltip);

  #photo = new BehaviorSubject<Photo | null>(null);
  photo$ = this.#photo.asObservable();

  resolved$ = this.route.data.pipe(
    filter((data) => 'photo' in data),
    map((data) => data['photo'] as Photo & { album: Album })
  );

  keepEquals = signal(true);

  shareLabel = signal('Compartilhar');

  constructor() {
    this.resolved$.subscribe((photo) => {
      if (photo) {
        this.#photo.next(photo);
      }
    });
  }

  share(refTooltip: MatTooltip) {
    const set = (label: string) => {
      return tap(() => this.shareLabel.set(label));
    };

    concat(
      timer(500),
      of('').pipe(set('Link copiado')),
      of('').pipe(tap(() => refTooltip.show())),
      timer(2000),
      of('').pipe(tap(() => refTooltip.hide())),
      timer(1000),
      of('').pipe(set('Compartilhar'))
    ).subscribe();
  }

  getUserFromTags(tags: UserTag[] = []) {
    return tags.map((tag) => tag.user.displayName);
  }

  toggleTags(photo: Photo) {
    if (!photo.tags?.length) {
      return;
    }

    const tooltips = this.tooltips();

    for (let i = 0; i < tooltips.length - 1; i++) {
      tooltips[i].toggle();
    }
  }

  hasTagWithMe(photo: Photo, user: Authentication) {
    return photo.tags?.some((tag) => tag.user.id === user.id);
  }

  removeMyTag(photo: Photo, user: Authentication) {
    const tags = photo.tags?.filter((tag) => tag.user.id !== user.id) ?? [];

    this.photoFacade
      .updateTags({ ...photo, tags } as UpdatePhotoTags)
      .pipe(take(1))
      .subscribe((updated) => {
        this.#photo.next(updated);
      });
  }
}
