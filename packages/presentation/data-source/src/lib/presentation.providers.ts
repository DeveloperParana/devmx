import {
  provideCreatePresentationUseCase,
  provideFindPresentationByIDUseCase,
  provideFindPresentationsUseCase,
  providePresentationCommentsService,
  providePresentationReactionsService,
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

    providePresentationsFacade(),
  ];
}
