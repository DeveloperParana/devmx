import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  PresentationsService,
  FindPresentationsUseCase,
  FindPresentationByIDUseCase,
  CreatePresentationUseCase,
  UpdatePresentationUseCase,
  DeletePresentationUseCase,
} from '@devmx/presentation-domain/server';

export function provideCreatePresentationUseCase() {
  return createUseCaseProvider(CreatePresentationUseCase, [
    PresentationsService,
  ]);
}

export function provideFindPresentationsUseCase() {
  return createUseCaseProvider(FindPresentationsUseCase, [
    PresentationsService,
  ]);
}

export function provideFindPresentationByIDUseCase() {
  return createUseCaseProvider(FindPresentationByIDUseCase, [
    PresentationsService,
  ]);
}

export function provideUpdatePresentationUseCase() {
  return createUseCaseProvider(UpdatePresentationUseCase, [
    PresentationsService,
  ]);
}

export function provideDeletePresentationUseCase() {
  return createUseCaseProvider(DeletePresentationUseCase, [
    PresentationsService,
  ]);
}

export function provideUseCases() {
  return [
    provideCreatePresentationUseCase(),
    provideFindPresentationsUseCase(),
    provideFindPresentationByIDUseCase(),
    provideUpdatePresentationUseCase(),
    provideDeletePresentationUseCase(),
  ];
}
