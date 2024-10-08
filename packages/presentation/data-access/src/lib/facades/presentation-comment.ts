import { Page, PresentationCommentOut } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-data-access';
import { take } from 'rxjs';
import {
  CreatePresentationComment,
  CreatePresentationCommentUseCase,
  FindPresentationCommentsUseCase,
} from '@devmx/presentation-domain/client';

interface PresentationCommentState {
  comments: Page<PresentationCommentOut>;
  comment: PresentationCommentOut | null;
}

export class PresentationCommentFacade extends State<PresentationCommentState> {
  comments$ = this.select((state) => state.comments);

  comment$ = this.select((state) => state.comment);

  constructor(
    private createPresentationCommentUseCase: CreatePresentationCommentUseCase,
    private findPresentationCommentsUseCase: FindPresentationCommentsUseCase // private findPresentationCommentByIDUseCase: FindPresentationCommentByIDUseCase, // private updatePresentationCommentUseCase: UpdatePresentationCommentUseCase, // private removePresentationCommentUseCase: RemovePresentationCommentUseCase
  ) {
    super({
      comments: { data: [], items: 0, pages: 0 },
      comment: null,
    });
  }

  load(presentation: string, page = 0, size = 10) {
    const request$ = this.findPresentationCommentsUseCase.execute({
      presentation,
      page,
      size,
    });

    const onPresentationComments = (comments: Page<PresentationCommentOut>) => {
      this.setState({ comments });
    };

    request$.pipe(take(1)).subscribe(onPresentationComments);
  }

  // loadOne(id: string) {
  //   const request$ = this.findPresentationCommentByIDUseCase.execute(id);

  //   const onPresentationComment = (presentation: PresentationComment) => {
  //     this.setState({ presentation });
  //   };

  //   request$.pipe(take(1)).subscribe(onPresentationComment);
  // }

  create(data: CreatePresentationComment) {
    const request$ = this.createPresentationCommentUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load(data.presentation));
  }

  // update(data: PresentationComment) {
  //   const request$ = this.updatePresentationCommentUseCase.execute(data);

  //   request$.pipe(take(1)).subscribe(() => this.load());
  // }

  // remove(id: string) {
  //   const request$ = this.removePresentationCommentUseCase.execute(id);

  //   request$.pipe(take(1)).subscribe(() => this.load());
  // }
}
