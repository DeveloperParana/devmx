import { State } from '@devmx/shared-data-access';
import { FilterPresentation } from '../dtos';
import {
  CreatePresentation,
  Page,
  Presentation,
  PresentationOut,
} from '@devmx/shared-api-interfaces';
import {
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationsUseCase,
  RemovePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/client';
import { take } from 'rxjs';

interface PresentationState {
  presentations: Page<PresentationOut>;
  presentation: PresentationOut | null;
  filter: FilterPresentation;
}

export class PresentationFacade extends State<PresentationState> {
  presentations$ = this.select((state) => state.presentations);

  presentation$ = this.select((state) => state.presentation);

  constructor(
    private createPresentationUseCase: CreatePresentationUseCase,
    private findPresentationsUseCase: FindPresentationsUseCase,
    private findPresentationByIDUseCase: FindPresentationByIDUseCase,
    private updatePresentationUseCase: UpdatePresentationUseCase,
    private removePresentationUseCase: RemovePresentationUseCase
  ) {
    super({
      presentations: { data: [], items: 0, pages: 0 },
      filter: { title: '', format: '' },
      presentation: null,
    });
  }

  setFilter(filter: FilterPresentation) {
    this.setState({ filter });
  }

  clearFilter() {
    this.setState({ filter: { format: '', title: '' } });
  }

  load(page = 0, size = 10) {
    const filter = this.state.filter;
    const params = { filter, page, size };

    const request$ = this.findPresentationsUseCase.execute(params);

    const onPresentations = (presentations: Page<PresentationOut>) => {
      this.setState({ presentations });
    };

    request$.pipe(take(1)).subscribe(onPresentations);
  }

  loadOne(id: string) {
    const request$ = this.findPresentationByIDUseCase.execute(id);

    const onPresentation = (presentation: PresentationOut) => {
      this.setState({ presentation });
    };

    request$.pipe(take(1)).subscribe(onPresentation);
  }

  create(data: CreatePresentation) {
    const request$ = this.createPresentationUseCase.execute(data);

    request$.pipe(take(1)).subscribe(({ id }) => this.loadOne(id));
  }

  update(data: Presentation) {
    const request$ = this.updatePresentationUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load());
  }

  remove(id: string) {
    const request$ = this.removePresentationUseCase.execute(id);

    request$.pipe(take(1)).subscribe(() => this.load());
  }
}
