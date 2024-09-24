import { PresentationFacade } from '@devmx/presentation-data-access';
import { EditablePresentationComponent } from '../../components';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Presentation } from '@devmx/shared-api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { param } from '@devmx/shared-ui-global';
import { take } from 'rxjs';
import {
  inject,
  OnInit,
  viewChild,
  Component,
  DestroyRef,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'devmx-account-presentation',
  templateUrl: './presentation.container.html',
  styleUrl: './presentation.container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    MatCardModule,
    EditablePresentationComponent
  ],
  standalone: true,
})
export class PresentationContainer implements OnInit {
  presentationFacade = inject(PresentationFacade);

  destroyRef = inject(DestroyRef);

  editablePresentationChild = viewChild(EditablePresentationComponent);

  get editablePresentation() {
    return this.editablePresentationChild();
  }

  id$ = inject(ActivatedRoute).paramMap.pipe(param('id'));

  ngOnInit() {
    this.presentationFacade.presentation$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((presentation) => {
        if (this.editablePresentation && presentation) {
          this.editablePresentation.form.fill(presentation);
        }
      });

    this.id$.pipe(take(1)).subscribe((id) => {
      if (id) this.presentationFacade.loadOne(id);
    });
  }

  onSubmitted(data: Presentation) {
    this.presentationFacade.update(data);
  }
}
