import { expect, it, describe } from 'vitest';
import { isDir } from './utils';

describe('isDir', () => {
  it('Shoud return true when the string is empty', () => {
    expect(isDir('')).toBeTruthy();
  });
});
