import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { EditableEvent } from '@devmx/shared-api-interfaces';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { EventFacade } from '@devmx/event-data-access';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';
import { EventForm } from '../../forms';
import {
  CropImageComponent,
  SelectFileComponent,
} from '@devmx/shared-ui-global/image';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SelectCover } from '../../dialogs';

@Component({
  selector: 'devmx-event-admin-event',
  templateUrl: './event.container.html',
  styleUrl: './event.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    SelectFileComponent,
    CropImageComponent,
    IconComponent,
    JsonPipe,
  ],
  standalone: true,
})
export class EventContainer {
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  // skillFacade = inject(SkillFacade);

  eventFacade = inject(EventFacade);

  selectCover = inject(SelectCover);

  // skillDialog = inject(SkillDialog);

  form = new EventForm();

  #until = {
    openSkill: new Subject<void>(),
    searchSkill: new Subject<void>(),
  };

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ event }) => {
      if (event && event['id']) this.form.patch(event);

      this.form.valueChanges
        .pipe(
          filter((event) => !!event.id),
          takeUntilDestroyed(),
          debounceTime(3000)
        )
        .subscribe(() => {
          this.onSubmit();
        });
    });
  }

  onCoverFile(file: File) {
    this.selectCover.open(file).subscribe((cover) => {
      if (cover) this.form.patchValue({ cover });
    });
  }

  // openSkill(skill: EditableSkill | null = null) {
  //   return this.skillDialog
  //     .openSkill(skill)
  //     .afterClosed()
  //     .pipe(takeUntil(this.#until.openSkill))
  //     .subscribe((value) => {
  //       if (value) {
  //         if (value.id) this.skillFacade.update(value);
  //         else this.skillFacade.create(value);
  //       }
  //     });
  // }

  // openSearchSkills() {
  //   const dialog$ = this.skillDialog.searchSkills();

  //   dialog$.componentInstance.addSkill$
  //     .pipe(takeUntil(this.#until.searchSkill))
  //     .subscribe((state) => {
  //       if (state) this.openSkill();
  //       console.log(state);
  //     });

  //   dialog$
  //     .afterClosed()
  //     .pipe(takeUntil(this.#until.searchSkill))
  //     .subscribe((skills) => {
  //       if (skills && skills.length) {
  //         for (const skill of skills) {
  //           this.form.skills.add({ weight: 50, skill });
  //         }

  //         this.cdr.detectChanges();
  //       }

  //       this.#until.openSkill.next();
  //       this.#until.openSkill.complete();
  //       this.#until.searchSkill.next();
  //       this.#until.searchSkill.complete();
  //     });
  // }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      if (value.id) return this.eventFacade.update(value as EditableEvent);
      else return this.eventFacade.create(value as EditableEvent);
    }

    this.form.markAllAsTouched();
  }
}
