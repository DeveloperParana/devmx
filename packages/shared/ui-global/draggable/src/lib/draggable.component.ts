import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ul[devmx-draggable],ol[devmx-draggable]',
  template: `<ng-content select="li[devmx-draggable-item]" />`,
  styleUrl: './draggable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkDropList],
})
export class DraggableComponent<T> {
  dropped = output<CdkDragDrop<T>>();

  constructor(cdkDropList: CdkDropList<T>) {
    cdkDropList.dropped
      .asObservable()
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        this.dropped.emit(event);
      });
  }
}
