import { JobOpeningFacade } from '@devmx/career-data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditorComponent } from '@devmx/shared-ui-global/editor';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobOpeningForm } from '../../forms';
import { Subject } from 'rxjs';
import {
  inject,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MessageService } from '@devmx/shared-ui-global';
import { SkillDialogService } from '@devmx/learn-ui-shared';
import { SkillFacade } from '@devmx/learn-data-access';
import { EntityFacade } from '@devmx/shared-data-access';

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
    ]
})
export class JobOpeningContainer {
  route = inject(ActivatedRoute);

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
    this.form.logErrors();

    if (this.form.valid) {
      const value = this.form.getRawValue();
      if (value.id) this.jobFacade.update(value);
      else this.jobFacade.create(value);

      const message = `Armazenando informações`;
      return this.messageService.open({ message });
    }

    return this.form.markAllAsTouched();
  }
}
