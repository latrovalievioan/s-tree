import { cleanup } from '@testing-library/react';
import { ErrorModal } from '.';

describe(ErrorModal, () => {
  afterEach(() => {
    cleanup();
  });

  it('Matches snapshot', () => {
    expect(ErrorModal).toMatchSnapshot();
  });
});
