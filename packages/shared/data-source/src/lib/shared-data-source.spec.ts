import { sharedDataSource } from './shared-data-source';

describe('sharedDataSource', () => {
  it('should work', () => {
    expect(sharedDataSource()).toEqual('shared-data-source');
  });
});
