import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatListModule } from '@angular/material/list';
import {
  FileSizePipe,
  ResizedImage,
  ImageFileURLPipe,
} from '@devmx/shared-ui-global/image';
import {
  effect,
  signal,
  computed,
  Component,
  WritableSignal,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface UploadItem {
  photo: ResizedImage;
  progress: WritableSignal<number>;
}

@Component({
  exportAs: 'devmxUploadQueue',
  selector: 'devmx-upload-queue',
  templateUrl: './upload-queue.component.html',
  styleUrl: './upload-queue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    ImageFileURLPipe,
    FileSizePipe,
    MatListModule,
    IconComponent,
  ],
  standalone: true,
})
export class UploadQueueComponent {
  queue = signal<UploadItem[]>([]);

  opened = signal(false);

  resizing = signal(0);

  total = computed(() => {
    return this.queue().length;
  });

  completed = signal(0);

  constructor() {
    effect(
      () => {
        const { length } = this.queue().filter(
          ({ progress }) => progress() >= 90
        );
        this.completed.set(length);
      },
      { allowSignalWrites: true }
    );
  }
}
