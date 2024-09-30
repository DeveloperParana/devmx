import { eventDomain } from './event-domain';

describe('eventDomain', () => {
  it('should work', () => {
    expect(eventDomain()).toEqual('event-domain');
  });
});
