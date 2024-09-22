import { createUseCaseProvider } from '@devmx/shared-data-access';
import {
  PresentationService,
  FindPresentationsUseCase,
  FindPresentationByIDUseCase,
  CreatePresentationUseCase,
  UpdatePresentationUseCase,
  RemovePresentationUseCase,
} from '@devmx/presentation-domain/client';

export function provideCreatePresentationUseCase() {
  return createUseCaseProvider(CreatePresentationUseCase, [
    PresentationService,
  ]);
}

export function provideFindPresentationsUseCase() {
  return createUseCaseProvider(FindPresentationsUseCase, [PresentationService]);
}

export function provideFindPresentationByIDUseCase() {
  return createUseCaseProvider(FindPresentationByIDUseCase, [
    PresentationService,
  ]);
}

export function provideUpdatePresentationUseCase() {
  return createUseCaseProvider(UpdatePresentationUseCase, [
    PresentationService,
  ]);
}

export function provideRemovePresentationUseCase() {
  return createUseCaseProvider(RemovePresentationUseCase, [
    PresentationService,
  ]);
}
