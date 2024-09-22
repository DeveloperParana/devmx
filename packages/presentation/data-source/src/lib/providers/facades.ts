import { createServerProvider } from '@devmx/shared-data-source';
import { PresentationsFacade } from '../facades';
import {
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
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
