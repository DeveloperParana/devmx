import { createServerProvider } from '@devmx/shared-data-source';
import { PresentationCommentsFacade, PresentationsFacade } from '../facades';
import {
  CreatePresentationCommentUseCase,
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
  FindPresentationCommentsUseCase,
  FindPresentationsUseCase,
  RemovePresentationUseCase,
  UpdatePresentationUseCase,
} from '@devmx/presentation-domain/server';

export function providePresentationsFacade() {
  return createServerProvider(PresentationsFacade, [
    CreatePresentationUseCase,
    FindPresentationsUseCase,
    FindPresentationByIDUseCase,
    UpdatePresentationUseCase,
    RemovePresentationUseCase,
  ]);
}

export function providePresentationsCommentsFacade() {
  return createServerProvider(PresentationCommentsFacade, [
    CreatePresentationCommentUseCase,
    FindPresentationCommentsUseCase,
  ]);
}
