import {
  provideCreatePresentationCommentUseCase,
  provideCreatePresentationUseCase,
  provideFindPresentationByIDUseCase,
  provideFindPresentationCommenstUseCase,
  provideFindPresentationsUseCase,
  providePresentationCommentFacade,
  providePresentationCommentService,
  providePresentationFacade,
  providePresentationService,
  provideRemovePresentationUseCase,
  provideUpdatePresentationUseCase,
} from './providers';

export function providePresentation() {
  return [
    providePresentationService(),
    providePresentationCommentService(),

    provideCreatePresentationUseCase(),
    provideFindPresentationsUseCase(),
    provideFindPresentationByIDUseCase(),
    provideUpdatePresentationUseCase(),
    provideRemovePresentationUseCase(),

    provideCreatePresentationCommentUseCase(),
    provideFindPresentationCommenstUseCase(),

    providePresentationFacade(),
    providePresentationCommentFacade(),
  ];
}
