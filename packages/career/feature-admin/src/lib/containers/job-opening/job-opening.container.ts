import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { SkillDialogService } from '@devmx/learn-ui-shared';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MessageService } from '@devmx/shared-ui-global';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { SkillFacade } from '@devmx/learn-data-access';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { JobOpeningForm } from '../../forms';
import { Subject, take } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-career-admin-job-opening',
  templateUrl: './job-opening.container.html',
  styleUrl: './job-opening.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    EditorComponent,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    IconComponent,
  ],
})
export class JobOpeningContainer {
  route = inject(ActivatedRoute);

  router = inject(Router);

  cdr = inject(ChangeDetectorRef);

  skillFacade = inject(SkillFacade);

  jobFacade = inject(JobOpeningFacade);

  skillDialog = inject(SkillDialogService);

  messageService = inject(MessageService);

  form = new JobOpeningForm();

  #until = {
    openSkill: new Subject<void>(),
    searchSkill: new Subject<void>(),
  };

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ jobOpening }) => {
      if (jobOpening && jobOpening['id']) this.form.patch(jobOpening);
    });
  }

  openSkill(skill?: EditableSkill) {
    return this.skillDialog.open(skill).subscribe((value) => {
      if (value) {
        if (value.id) this.skillFacade.update(value);
        else this.skillFacade.create(value);
      }
    });
  }

  openSearchSkills() {
    const dialog$ = this.skillDialog.select({ multiple: true });

    dialog$.subscribe((skills) => {
      if (skills && skills.length) {
        for (const skill of skills) {
          this.form.skills.add({ weight: 50, skill });
        }

        this.cdr.detectChanges();
      }

      this.#until.openSkill.next();
      this.#until.openSkill.complete();
      this.#until.searchSkill.next();
      this.#until.searchSkill.complete();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      if (value.id) {
        const update$ = this.jobFacade.update(value);
        update$.pipe(take(1)).subscribe(() => {
          const path = ['/', 'carreiras', 'administracao', 'minhas-ofertas'];
          this.router.navigate(path);
        });
      } else {
        const redirect$ = this.jobFacade.create(value);
        redirect$.pipe(take(1)).subscribe(({ id }) => {
          this.router.navigate(this.#getPath(id));
        });
      }

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }

  #getPath(id: string) {
    return ['/', 'carreiras', 'administracao', 'minhas-ofertas', id];
  }
}
