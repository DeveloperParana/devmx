import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { InstitutionDialog, SubjectDialog } from '../../dialogs';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from '@devmx/shared-ui-global';
import { MatInputModule } from '@angular/material/input';
import { SelectUser } from '@devmx/account-ui-shared';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { CourseForm } from '../../forms';
import {
  CourseFacade,
  SubjectFacade,
  InstitutionFacade,
} from '@devmx/academy-data-access';
import {
  EditableSubject,
  EditableInstitution,
} from '@devmx/shared-api-interfaces';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-academy-admin-course',
  templateUrl: './course.container.html',
  styleUrl: './course.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    EditorComponent,
    MatInputModule,
    MatCardModule,
    MatListModule,
    IconComponent,
  ],
  standalone: true,
})
export class CourseContainer {
  route = inject(ActivatedRoute);

  cdr = inject(ChangeDetectorRef);

  subjectFacade = inject(SubjectFacade);

  institutionFacade = inject(InstitutionFacade);

  institutionDialog = inject(InstitutionDialog);

  subjectDialog = inject(SubjectDialog);

  selectAccount = inject(SelectUser);

  courseFacade = inject(CourseFacade);

  messageService = inject(MessageService);

  form = new CourseForm();

  #until = {
    openSubject: new Subject<void>(),
    searchSubject: new Subject<void>(),
    openInstitution: new Subject<void>(),
    searchInstitution: new Subject<void>(),
  };

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ course }) => {
      if (course && course['id']) this.form.patch(course);
    });
  }

  openSelectContributor() {
    this.selectAccount
      .open({
        onlyRole: 'academic',
        multiple: true,
      })
      .pipe(take(1))
      .subscribe((contributors) => {
        if (contributors && contributors.length) {
          for (const contributor of contributors) {
            this.form.contributors.add(contributor);
          }
        }

        this.cdr.detectChanges();
      });
  }

  openInstitution(institution: EditableInstitution | null = null) {
    return this.institutionDialog
      .openInstitution(institution)
      .afterClosed()
      .pipe(takeUntil(this.#until.openInstitution))
      .subscribe((value) => {
        if (value) {
          if (value.id) this.institutionFacade.update(value);
          else this.institutionFacade.create(value);
        }
      });
  }

  openSearchInstitution() {
    const dialog$ = this.institutionDialog.searchInstitution();

    dialog$.componentInstance.addInstitution$
      .pipe(takeUntil(this.#until.searchInstitution))
      .subscribe((state) => {
        if (state) this.openInstitution();
      });

    dialog$
      .afterClosed()
      .pipe(takeUntil(this.#until.searchInstitution))
      .subscribe((institution) => {
        if (institution) this.form.patchValue({ institution });

        this.#until.openInstitution.next();
        this.#until.openInstitution.complete();
        this.#until.searchInstitution.next();
        this.#until.searchInstitution.complete();
      });
  }

  openSubject(subject: EditableSubject | null = null) {
    return this.subjectDialog
      .openSubject(subject)
      .afterClosed()
      .pipe(takeUntil(this.#until.openSubject))
      .subscribe((value) => {
        if (value) {
          if (value.id) this.subjectFacade.update(value);
          else this.subjectFacade.create(value);
        }
      });
  }

  openSearchSubjects() {
    const dialog$ = this.subjectDialog.searchSubjects();

    dialog$.componentInstance.addSubject$
      .pipe(takeUntil(this.#until.searchSubject))
      .subscribe((state) => {
        if (state) this.openSubject();
        console.log(state);
      });

    dialog$
      .afterClosed()
      .pipe(takeUntil(this.#until.searchSubject))
      .subscribe((subjects) => {
        if (subjects && subjects.length) {
          for (const subject of subjects) {
            const value = { hours: 0, instructor: '', subject };
            this.form.subjects.add(value);
          }

          this.cdr.detectChanges();
        }

        this.#until.openSubject.next();
        this.#until.openSubject.complete();
        this.#until.searchSubject.next();
        this.#until.searchSubject.complete();
      });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      if (value.id) this.courseFacade.update(value);
      else this.courseFacade.create(value);

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
