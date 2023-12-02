import { expect, it, describe } from 'vitest';
import {
  addCredentialsToStorage,
  getDepth,
  getDirectChildren,
  isDir,
  useGetDisplayName,
} from './utils';

describe(isDir, () => {
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

describe(getDepth, () => {
  it('Should return correct depth for dir keys', () => {
    expect(getDepth('hello/world/')).toEqual(2);
  });

  it('Should return correct depth for file keys', () => {
    expect(getDepth('hello/world.hs')).toEqual(2);
  });
});

describe(getDirectChildren, () => {
  const keys = [
    'test1/',
    'test1.go',
    'test1/test2/',
    'test1/test2.hs',
    'test1/test2/test3/',
    'test1/test2/test3.hs',
    'randomKey/test2/',
    'randomKey/test2.txt',
    '',
  ];

  it('Should return correct children for root(empty string)', () => {
    const expected = ['test1/', 'test1.go'];
    expect(getDirectChildren('', keys)).toStrictEqual(expected);
  });

  it('Should return correct children for different depths', () => {
    const expected = ['test1/test2/test3/', 'test1/test2/test3.hs'];
    expect(getDirectChildren('test1/test2/', keys)).toStrictEqual(expected);
  });
});

describe.skip(useGetDisplayName, () => {
  it('Figure out how to test this');
});

describe(addCredentialsToStorage, () => {
  it('Should add the passed credentials to storage', () => {
    const credentials = {
      accessKeyId: 'id',
      secretAccessKey: 'key',
      region: 'region',
      bucket: 'bucket',
    };

    addCredentialsToStorage(credentials);
    expect(JSON.parse(localStorage.getItem('credentials')!)).toStrictEqual(
      credentials
    );
  });
});
