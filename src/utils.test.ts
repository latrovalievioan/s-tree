import { expect, it, describe } from 'vitest';
import { isDir } from './utils';

describe('isDir', () => {
  it('Shoud return true when the string is empty', () => {
    expect(isDir('')).toBeTruthy();
  });

  it('Shoud return true when the string ends with /', () => {
    expect(isDir('testing_tests/')).toBeTruthy();
  });

  it("Shoud return false when the string isn't empty or ends with /", () => {
    expect(isDir('testing_tests')).toBeFalsy();
  });
});
