import { createServerProvider } from '@devmx/shared-data-source';
import { plainToInstance } from 'class-transformer';
import { CreateRSVPDto, RSVPDto } from '../dtos';
import {
  CreateRSVPUseCase,
  FindRSVPByEventUseCase,
} from '@devmx/event-domain/server';

export class RSVPsFacade {
  constructor(
    private createRSVPUseCase: CreateRSVPUseCase,
    private findRSVPByEventUseCase: FindRSVPByEventUseCase
  ) {}

  async create(data: CreateRSVPDto) {
    const job = await this.createRSVPUseCase.execute(data);
    return plainToInstance(RSVPDto, job);
  }

  async find(event: string) {
    const data = await this.findRSVPByEventUseCase.execute(event);
    return plainToInstance(RSVPDto, data);
  }
}

export function provideRSVPsFacade() {
  return createServerProvider(RSVPsFacade, [
    CreateRSVPUseCase,
    FindRSVPByEventUseCase,
  ]);
}
