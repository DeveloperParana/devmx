import { EventOut, UseCase } from '@devmx/shared-api-interfaces';
import { UploadCover } from '@devmx/shared-api-interfaces/client';
import { EventService } from '../services';

export class UploadCoverUseCase implements UseCase<UploadCover, EventOut> {
  constructor(private eventService: EventService) {}

  execute({ id, cover }: UploadCover) {
    return this.eventService.upload(id, cover);
  }
}
