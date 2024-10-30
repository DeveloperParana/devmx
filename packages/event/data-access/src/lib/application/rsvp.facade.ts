import { createClientProvider } from '@devmx/shared-data-access';
import { CreateRSVP } from '@devmx/shared-api-interfaces/client';
import { RSVP } from '@devmx/shared-api-interfaces';
import { State } from '@devmx/shared-util-data';
import { take } from 'rxjs';
import {
  CreateRSVPUseCase,
  FindRSVPByEventUseCase,
} from '@devmx/event-domain/client';

interface RSVPState {
  response: RSVP[];
}

export class RSVPFacade extends State<RSVPState> {
  response$ = this.select((state) => state.response);

  constructor(
    private createRSVPUseCase: CreateRSVPUseCase,
    private findRSVPByEventUseCase: FindRSVPByEventUseCase
  ) {
    super({
      response: [],
    });
  }

  load(event: string) {
    const request$ = this.findRSVPByEventUseCase.execute(event);

    const onResponse = (response: RSVP[]) => {
      this.setState({ response });
    };

    request$.pipe(take(1)).subscribe(onResponse);
  }

  create(data: CreateRSVP) {
    const request$ = this.createRSVPUseCase.execute(data);

    request$.pipe(take(1)).subscribe(() => this.load(data.event));
  }
}

export function provideRSVPFacade() {
  return createClientProvider(RSVPFacade, [
    CreateRSVPUseCase,
    FindRSVPByEventUseCase,
  ]);
}
