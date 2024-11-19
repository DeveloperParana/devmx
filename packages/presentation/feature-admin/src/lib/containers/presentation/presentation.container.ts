import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PresentationFacade } from '@devmx/presentation-data-access';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MessageService } from '@devmx/shared-ui-global';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { ListItemDialog } from '../../dialogs';
import { PresentationForm } from '../../forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    selector: 'devmx-presentation-admin-presentation',
    templateUrl: './presentation.container.html',
    styleUrl: './presentation.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        MatCardModule,
        EditorComponent,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        DragDropModule,
        MatCheckboxModule,
        MatInputModule,
        MatListModule,
        MatButtonModule,
        MatSelectModule,
        IconComponent,
    ]
})
export class PresentationContainer {
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  presentationFacade = inject(PresentationFacade);

  messageService = inject(MessageService);

  listItemDialog = inject(ListItemDialog);

  form = new PresentationForm();

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ presentation }) => {
      if (presentation && presentation['id']) this.form.patch(presentation);
    });
  }

  dropTags(event: CdkDragDrop<FormControl<string>[]>) {
    moveItemInArray(
      this.form.tags.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropResources(event: CdkDragDrop<FormControl<string>[]>) {
    moveItemInArray(
      this.form.resources.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      if (value.id) this.presentationFacade.update(value);
      else this.presentationFacade.create(value);

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
