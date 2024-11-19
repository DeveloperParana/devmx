import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { PageParams, PaginatorComponent } from '@devmx/shared-ui-global';
import { SkillDialogService, SkillForm } from '@devmx/learn-ui-shared';
import { SearchFieldComponent } from '@devmx/shared-ui-global/search';
import { EditableSkill, Skill } from '@devmx/shared-api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogFacade } from '@devmx/shared-ui-global/dialog';
import { MatSortModule, Sort } from '@angular/material/sort';
import { IconComponent } from '@devmx/shared-ui-global/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SkillFacade } from '@devmx/learn-data-access';
import { SortMapper } from '@devmx/shared-data-access';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'devmx-admin-skills',
    templateUrl: './skills.container.html',
    styleUrl: './skills.container.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        RouterModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        SearchFieldComponent,
        PaginatorComponent,
        MatInputModule,
        MatSortModule,
        IconComponent,
        MatCardModule,
        AsyncPipe,
    ]
})
export class SkillsContainer {
  router = inject(Router);

  route = inject(ActivatedRoute);

  skillFacade = inject(SkillFacade);

  skillDialog = inject(SkillDialogService);

  dialogFacade = inject(DialogFacade);

  columns = ['name', 'actions'];

  form = new SkillForm();

  constructor() {
    this.route.queryParams
      .pipe(takeUntilDestroyed())
      .subscribe(this.onQueryParams);
  }

  onQueryParams = (params: Params) => {
    const { page = 0, size = 10, name = '', sort = '' } = params;

    this.skillFacade.setFilter({ name });

    this.skillFacade.setPage(page, size);

    this.skillFacade.setSort(SortMapper.fromParams(sort));

    this.skillFacade.load();

    console.log(this.route.snapshot.toString());

  };

  onSearchChange(name: string) {
    const queryParams = this.mergeParams({ name });
    this.router.navigate([], { queryParams });
  }

  onPageChange(params: PageParams) {
    const queryParams = this.mergeParams(params);
    this.router.navigate([], { queryParams });
  }

  onSortChange({ active, direction }: Sort) {
    const params = SortMapper.toParams(active, direction);
    const queryParams = this.mergeParams(params);
    this.router.navigate([], { queryParams });
  }

  mergeParams(params: object) {
    return { ...this.route.snapshot.queryParams, ...params };
  }

  onSubmit(skillForm: FormGroupDirective) {
    if (this.form.valid) {
      this.skillFacade.create(this.form.getRawValue());
      skillForm.resetForm();
    }
  }

  createSkill() {
    this.skillDialog.open().subscribe((skill) => {
      if (skill) this.skillFacade.create(skill);
    });
  }

  editSkill(skill: EditableSkill) {
    this.skillDialog.open(skill).subscribe((data) => {
      if (data) this.skillFacade.create(data);
    });
  }

  deleteSkill({ id, name }: Skill) {
    this.dialogFacade
      .confirm(
        `Confirme que deseja apagar a habilidade ${name}`,
        `Esta ação não poderá ser desfeita`
      )
      .subscribe((confirmation) => {
        if (confirmation) this.skillFacade.delete(id);
      });
  }
}
