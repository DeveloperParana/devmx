import { createClientProvider } from '@devmx/shared-data-access';
import { PresentationFacade } from '../facades';
import {
  CreatePresentationUseCase,
  FindPresentationByIDUseCase,
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
