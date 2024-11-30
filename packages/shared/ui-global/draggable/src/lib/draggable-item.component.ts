import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'li[devmx-draggable-item]',
  template: `
    <div>
      <devmx-icon name="drag/handle" cdkDragHandle />

      <div class="draggable-item-content">
        <ng-content />
      </div>
    </div>
  `,
  styleUrl: './draggable-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DragDropModule, IconComponent],
  hostDirectives: [CdkDrag],
})
export class DraggableItemComponent<T> {
  data = input<T>();

  constructor(cdkDrag: CdkDrag<T>) {
    const data = this.data();
    if (data) cdkDrag.data = data;
  }
}
