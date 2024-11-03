import { DropZoneDirective, resizeImage } from '@devmx/shared-ui-global/image';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AlbumFacade } from '@devmx/album-data-access';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlbumForm } from '../../forms';
import {
  inject,
  signal,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { asyncAll, observer } from '@devmx/shared-util-data';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { from, map, mergeMap, of, scan, switchMap, tap } from 'rxjs';

@Component({
  selector: 'devmx-admin-album',
  templateUrl: './album.container.html',
  styleUrl: './album.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    DropZoneDirective,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    IconComponent,
    AsyncPipe,
    JsonPipe,
    NgClass,
  ],
  standalone: true,
})
export class AlbumContainer {
  route = inject(ActivatedRoute);

  form = new AlbumForm();

  albumFacade = inject(AlbumFacade);

  dragOver = signal(false);

  files = signal<File[]>([]);
  images = signal<File[]>([]);
  resizeProccess = signal(0);

  progress = observer(0);
  progress$ = this.progress.observe();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ album }) => {
      if (album && album['id']) this.form.patchValue(album);
    });
  }

  onDragEnter(event: DragEvent) {
    console.log(event);
  }

  // onDrop(files: File[]) {

  // }

  onDragLeave(event: DragEvent) {
    console.log(event);
  }

  onDragOver(event: DragEvent) {
    console.log(event);
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      return this.albumFacade.create(value);
    }

    this.form.markAllAsTouched();
  }
}
