import {
  provideCreatePresentationCommentUseCase,
  provideCreatePresentationUseCase,
  provideFindPresentationByIDUseCase,
  provideFindPresentationCommentsUseCase,
  provideFindPresentationsUseCase,
  providePresentationCommentsService,
  providePresentationReactionsService,
  providePresentationsCommentsFacade,
  providePresentationsFacade,
  providePresentationsService,
  provideRemovePresentationUseCase,
  provideUpdatePresentationUseCase,
} from './providers';

export function providePresentations() {
  return [
    providePresentationsService(),
    providePresentationCommentsService(),
    providePresentationReactionsService(),

    provideCreatePresentationUseCase(),
    provideFindPresentationsUseCase(),
    provideFindPresentationByIDUseCase(),
    provideUpdatePresentationUseCase(),
    provideRemovePresentationUseCase(),

    provideCreatePresentationCommentUseCase(),
    provideFindPresentationCommentsUseCase(),

    providePresentationsFacade(),
    providePresentationsCommentsFacade(),
  ];
}
