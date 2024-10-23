import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EditableSkill } from '@devmx/shared-api-interfaces';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { SkillFacade } from '@devmx/career-data-access';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { SkillDialog } from '../../dialogs';
import { Subject, takeUntil } from 'rxjs';
import { JobForm } from '../../forms';

@Component({
  selector: 'devmx-career-admin-job',
  templateUrl: './job.container.html',
  styleUrl: './job.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    IconComponent,
    JsonPipe,
  ],
  standalone: true,
})
export class JobContainer {
  route = inject(ActivatedRoute);

  skillFacade = inject(SkillFacade);

  skillDialog = inject(SkillDialog);

  form = new JobForm();

  #until = {
    openSkill: new Subject<void>(),
    searchSkill: new Subject<void>(),
  };

  constructor() {
    this.route.data.pipe(takeUntilDestroyed()).subscribe(({ job }) => {
      if (job) this.form.patchValue(job);
    });
  }

  openSkill(skill: EditableSkill | null = null) {
    return this.skillDialog
      .openSkill(skill)
      .afterClosed()
      .pipe(takeUntil(this.#until.openSkill))
      .subscribe((value) => {
        if (value) {
          if (value.id) this.skillFacade.update(value);
          else this.skillFacade.create(value);
        }
      });
  }

  openSearchSkills() {
    const dialog$ = this.skillDialog.searchSkills();

    dialog$.componentInstance.addSkill$
      .pipe(takeUntil(this.#until.searchSkill))
      .subscribe((state) => {
        if (state) this.openSkill();
        console.log(state);
      });

    dialog$
      .afterClosed()
      .pipe(takeUntil(this.#until.searchSkill))
      .subscribe((skills) => {
        if (skills && skills.length) {
          for (const skill of skills) {
            this.form.skills.add({ weight: 50, skill });
          }
        }

        this.#until.openSkill.next();
        this.#until.openSkill.complete();
        this.#until.searchSkill.next();
        this.#until.searchSkill.complete();
      });
  }
}
