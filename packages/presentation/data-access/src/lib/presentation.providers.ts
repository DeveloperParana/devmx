import {
  provideCreatePresentationUseCase,
  provideFindPresentationByIDUseCase,
  provideFindPresentationsUseCase,
  providePresentationFacade,
  providePresentationService,
  provideRemovePresentationUseCase,
  provideUpdatePresentationUseCase,
} from './providers';

export function providePresentation() {
  return [
    providePresentationService(),

    provideCreatePresentationUseCase(),
    provideFindPresentationsUseCase(),
    provideFindPresentationByIDUseCase(),
    provideUpdatePresentationUseCase(),
    provideRemovePresentationUseCase(),

    providePresentationFacade(),
  ];
}
