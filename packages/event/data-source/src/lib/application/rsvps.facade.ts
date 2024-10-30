import { createServerProvider } from '@devmx/shared-data-source';
import { plainToInstance } from 'class-transformer';
import { CreateRSVPDto, RSVPDto } from '../dtos';
import {
  CreateRSVPUseCase,
  FindRSVPByEventUseCase,
  FindRSVPConfirmedByEventUseCase,
} from '@devmx/event-domain/server';

export class RSVPsFacade {
  constructor(
    private createRSVPUseCase: CreateRSVPUseCase,
    private findRSVPByEventUseCase: FindRSVPByEventUseCase,
    private findRSVPConfirmedByEventUseCase: FindRSVPConfirmedByEventUseCase
  ) {}

  async create(data: CreateRSVPDto) {
    const job = await this.createRSVPUseCase.execute(data);
    return plainToInstance(RSVPDto, job);
  }

  async find(event: string) {
    const data = await this.findRSVPByEventUseCase.execute(event);
    return plainToInstance(RSVPDto, data);
  }

  async findConfirmed(event: string) {
    const data = await this.findRSVPConfirmedByEventUseCase.execute(event);
    return plainToInstance(RSVPDto, data);
  }
}

export function provideRSVPsFacade() {
  return createServerProvider(RSVPsFacade, [
    CreateRSVPUseCase,
    FindRSVPByEventUseCase,
    FindRSVPConfirmedByEventUseCase,
  ]);
}
