import { Authentication, Photo, UserTag } from '@devmx/shared-api-interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PhotoViewerData } from './photo-viewer-data';
import { detectTaggingIntent } from '../utils';
import {
  inject,
  signal,
  Component,
  viewChild,
  ElementRef,
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
  imports: [MatTooltipModule, MatButtonModule, MatMenuModule, IconComponent],
})
export class PhotoViewerComponent implements AfterViewInit {
  tagUser = inject<TagUserService>(TagUserService);

  cdr = inject(ChangeDetectorRef);

  ref = inject<DialogRef<Photo, PhotoViewerComponent>>(DialogRef);

  data = inject<PhotoViewerData>(DIALOG_DATA);

  originalTags: UserTag[] = [];

  imageRef = viewChild.required<ElementRef<HTMLImageElement>>('imageRef');

  image!: HTMLImageElement;

  hasUpdates = signal(false);

  hasTagWithMe(user: Authentication) {
    return this.data.photo.tags?.some((tag) => tag.user.id === user.id);
  }

  removeMyTag(user: Authentication) {
    this.data.photo.tags = this.data.photo.tags?.filter(
      (tag) => tag.user.id !== user.id
    );
    const hasUpdates = this.arraysAreEqual(
      this.originalTags,
      this.data.photo.tags ?? []
    );
    this.hasUpdates.set(!hasUpdates);
  }

  ngAfterViewInit() {
    this.originalTags = [...(this.data.photo.tags ?? [])];

    this.image = this.imageRef().nativeElement;

    this.image.oncontextmenu = (ev) => ev.preventDefault();

    detectTaggingIntent(this.image).subscribe(({ x, y }) => {
      const offsetX = x * this.image.width;
      const offsetY = y * this.image.height;

      const closed$ = this.tagUser.open(this.image, offsetX, offsetY).closed;

      closed$.subscribe((userRef) => {
        if (userRef && this.data.photo.tags) {
          const { id, displayName, name } = userRef;
          const user = { id, displayName, name };
          this.data.photo.tags.push({ x: x * 100, y: y * 100, user });
          const hasUpdates = this.arraysAreEqual(
            this.originalTags,
            this.data.photo.tags
          );
          this.hasUpdates.set(!hasUpdates);
          this.cdr.detectChanges();
        }
      });
    });
  }

  arraysAreEqual<T>(a: T[], b: T[]) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }
}
