import { Authentication, Photo, UserTag } from '@devmx/shared-api-interfaces';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatMenuModule } from '@angular/material/menu';
import { arrayEquals } from '@devmx/shared-util-data';
import { concat, of, Subject, tap, timer } from 'rxjs';
import { PhotoViewerData } from './photo-viewer-data';
import { detectTaggingIntent } from '../utils';
import {
  inject,
  signal,
  Component,
  viewChild,
  ElementRef,
  viewChildren,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  TagUserService,
  provideTagUserService,
} from '../tag-user/tag-user.service';

@Component({
  selector: 'devmx-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrl: './photo-viewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideTagUserService()],
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    IconComponent,
  ],
})
export class PhotoViewerComponent implements AfterViewInit {
  tagUser = inject<TagUserService>(TagUserService);

  #cdr = inject(ChangeDetectorRef);

  #ref = inject<DialogRef<Photo, PhotoViewerComponent>>(DialogRef);

  data = inject<PhotoViewerData>(DIALOG_DATA);

  tooltips = viewChildren(MatTooltip);

  #originalTags: UserTag[] = [];

  imageRef = viewChild.required<ElementRef<HTMLImageElement>>('imageRef');

  keepEquals = signal(true);

  shareLabel = signal('Compartilhar');

  #photo = new Subject<Photo>();
  photo$ = this.#photo.asObservable();

  #updated = new Subject<Photo>();
  updated$ = this.#updated.asObservable();

  updated(photo: Photo) {
    this.#photo.next(photo);
  }

  update(photo: Photo) {
    this.#updated.next(photo);
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

  removeMyTag(user: Authentication) {
    this.data.photo.tags = this.data.photo.tags?.filter(
      (tag) => tag.user.id !== user.id
    );

    const keepEquals = arrayEquals(
      this.#originalTags,
      this.data.photo.tags ?? []
    );

    this.keepEquals.set(keepEquals);
  }

  ngAfterViewInit() {
    this.#originalTags = [...(this.data.photo.tags ?? [])];

    this.photo$.subscribe((photo) => {
      this.data.photo = photo;
      this.#originalTags = [...(this.data.photo.tags ?? [])];
      this.#cdr.detectChanges();

      const keepEquals = arrayEquals(
        this.#originalTags,
        this.data.photo.tags ?? []
      );

      this.keepEquals.set(keepEquals);
    });

    const image = this.imageRef().nativeElement;

    image.oncontextmenu = (ev) => ev.preventDefault();

    detectTaggingIntent(image).subscribe((position) => {
      const offsetX = position.x * image.width;
      const offsetY = position.y * image.height;

      const except = this.data.photo.tags?.map((tag) => tag.user) ?? [];

      const closed$ = this.tagUser.open({
        target: image,
        data: { except },
        offsetX,
        offsetY,
      }).closed;

      closed$.subscribe((ref) => {
        if (ref) {
          const { id, displayName, name } = ref;
          const user = { id, displayName, name };

          const x = position.x * 100;
          const y = position.y * 100;

          this.data.photo.tags?.push({ x, y, user });
          this.#cdr.detectChanges();

          const keepEquals = arrayEquals(
            this.#originalTags,
            this.data.photo.tags ?? []
          );

          this.keepEquals.set(keepEquals);
        }
      });
    });
  }

  toggleTags() {
    if (!this.data.photo.tags?.length) {
      return;
    }

    for (const tooltip of this.tooltips()) {
      tooltip.toggle();
    }
  }

  hasTagWithMe(user: Authentication) {
    return this.data.photo.tags?.some((tag) => tag.user.id === user.id);
  }

  close() {
    this.#ref.close();
  }
}
