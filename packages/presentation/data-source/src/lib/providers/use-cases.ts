import { createUseCaseProvider } from '@devmx/shared-data-source';
import {
  PresentationsService,
  FindPresentationsUseCase,
  FindPresentationByIDUseCase,
  CreatePresentationUseCase,
  UpdatePresentationUseCase,
  RemovePresentationUseCase,
  CreatePresentationCommentUseCase,
  PresentationCommentsService,
  FindPresentationCommentsUseCase,
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

export function provideRemovePresentationUseCase() {
  return createUseCaseProvider(RemovePresentationUseCase, [
    PresentationsService,
  ]);
}

export function provideCreatePresentationCommentUseCase() {
  return createUseCaseProvider(CreatePresentationCommentUseCase, [
    PresentationCommentsService,
  ]);
}

export function provideFindPresentationCommentsUseCase() {
  return createUseCaseProvider(FindPresentationCommentsUseCase, [
    PresentationCommentsService,
  ]);
}
