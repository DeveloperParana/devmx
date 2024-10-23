import { PresentationFacade } from '@devmx/presentation-data-access';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { param } from '@devmx/shared-ui-global';
import { PresentationForm } from '../../forms';
import { take } from 'rxjs';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  inject,
  OnInit,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IconComponent } from '@devmx/shared-ui-global/icon';

@Component({
  selector: 'devmx-account-presentation',
  templateUrl: './presentation.container.html',
  styleUrl: './presentation.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    DragDropModule,
    MatInputModule,
    IconComponent,
    MatListModule,
    MatButtonModule,
    TextFieldModule,
  ],
  standalone: true,
})
export class PresentationContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  destroyRef = inject(DestroyRef);
  route = inject(ActivatedRoute);

  form = new PresentationForm();

  ngOnInit() {
    this.presentationFacade.presentation$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((presentation) => {
        if (presentation) {
          this.form.fill(presentation);
        }
      });

    const id$ = this.route.paramMap.pipe(param('id'));
    id$.pipe(take(1)).subscribe((id) => {
      if (id) this.presentationFacade.loadOne(id);
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
      return this.presentationFacade.update(this.form.getRawValue());
    }

    this.form.markAllAsTouched();
  }
}
