import { sharedDataAccess } from './shared-data-access';

describe('sharedDataAccess', () => {
  it('should work', () => {
    expect(sharedDataAccess()).toEqual('shared-data-access');
  });
});
