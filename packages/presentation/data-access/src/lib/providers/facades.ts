import { createClientProvider } from '@devmx/shared-data-access';
import { PresentationCommentFacade, PresentationFacade } from '../facades';
import {
  CreatePresentationCommentUseCase,
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationCommentsUseCase,
  FindPresentationsUseCase,
  RemovePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/client';

export function providePresentationFacade() {
  return createClientProvider(PresentationFacade, [
    CreatePresentationUseCase,
    FindPresentationsUseCase,
    FindPresentationByIDUseCase,
    UpdatePresentationUseCase,
    RemovePresentationUseCase,
  ]);
}

export function providePresentationCommentFacade() {
  return createClientProvider(PresentationCommentFacade, [
    CreatePresentationCommentUseCase,
    FindPresentationCommentsUseCase,
    // FindPresentationByIDUseCase,
    // UpdatePresentationUseCase,
    // RemovePresentationUseCase,
  ]);
}
