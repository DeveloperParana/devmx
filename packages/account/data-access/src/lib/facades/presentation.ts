import { Page, Presentation } from '@devmx/shared-api-interfaces';
import { PresentationService } from '@devmx/account-domain';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';

interface PresentationState {
  presentations: Page<Presentation>;
}

export class PresentationFacade extends State<PresentationState> {
  presentations$ = this.select((state) => state.presentations);

  constructor(private presentationService: PresentationService) {
    super({ presentations: { data: [], items: 0, pages: 0 } });
  }

  loadPresentations(page = 0, size = 10) {
    const request$ = this.presentationService.findPresentations({ page, size });

    const onPresentations = (presentations: Page<Presentation>) => {
      this.setState({ presentations });
    };

    request$.pipe(take(1)).subscribe(onPresentations);
  }

  create(presentation: Presentation) {
    const request$ = this.presentationService.create(presentation);

    request$.pipe(take(1)).subscribe(() => this.loadPresentations());
  }

  update(presentation: Presentation) {
    const request$ = this.presentationService.update(
      presentation.id,
      presentation
    );

    request$.pipe(take(1)).subscribe(() => this.loadPresentations());
  }
}
