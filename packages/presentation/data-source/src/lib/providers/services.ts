import { getModelToken } from '@nestjs/mongoose';
import {
  PresentationsService,
  PresentationCommentsService,
  PresentationReactionsService,
} from '@devmx/presentation-domain/server';
import { createServiceProvider } from '@devmx/shared-data-source';
import {
  PresentationsServiceImpl,
  PresentationCommentsServiceImpl,
  PresentationReactionsServiceImpl,
} from '../services';
import {
  PresentationSchema,
  PresentationCommentSchema,
  PresentationReactionSchema,
} from '../schemas';

export function providePresentationsService() {
  return createServiceProvider(PresentationsService, PresentationsServiceImpl, [
    getModelToken(PresentationSchema.name),
  ]);
}

export function providePresentationCommentsService() {
  return createServiceProvider(
    PresentationCommentsService,
    PresentationCommentsServiceImpl,
    [getModelToken(PresentationCommentSchema.name)]
  );
}

export function providePresentationReactionsService() {
  return createServiceProvider(
    PresentationReactionsService,
    PresentationReactionsServiceImpl,
    [getModelToken(PresentationReactionSchema.name)]
  );
}
