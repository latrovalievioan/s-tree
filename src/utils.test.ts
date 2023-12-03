import {
  addCredentialsToStorage,
  generateBreadcrumbs,
  getDepth,
  getDirectChildren,
  getParentsOf,
  initializeClientFromStorage,
  isDir,
  isParentOf,
  getDisplayName,
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

describe(getDisplayName, () => {
  const bucket = 'test_bucket_name';
  it('Should generate correct name for root (empty string prefix)', () => {
    const expected = 's3://' + bucket;

    expect(getDisplayName('', bucket)).toEqual(expected);
  });

  it('Should generate correct display name for nested dir keys', () => {
    const key = 'test1/test2/test3/';
    const expected = 'test3';

    expect(getDisplayName(key, bucket)).toEqual(expected);
  });

  it('Should generate correct display name for nested file keys', () => {
    const key = 'test1/test2/test3.hs';
    const expected = 'test3.hs';

    expect(getDisplayName(key, bucket)).toEqual(expected);
  });
});

it('addCredentialsToStorage', () => {
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

describe.skip(initializeClientFromStorage, () => {
  it(
    'Figure how to test this with ENV variables without exposing the secrets to github'
  );
});

it(generateBreadcrumbs, () => {
  const expected = ['test1/', 'test2/', 'test3/', 'test4.hs'];

  expect(generateBreadcrumbs('test1/test2/test3/test4.hs')).toStrictEqual(
    expected
  );
});

it(isParentOf, () => {
  expect(isParentOf('test1/test2/', 'test1/test2/test3.hs')).toBeTruthy();
});

it(getParentsOf, () => {
  const expected = [
    'test1/',
    'test1/test2/',
    'test1/test2/test3/',
    'test1/test2/test3/',
    '',
  ];
  const keys = [
    'test1/',
    'test1/test2/',
    'test1/test2/test3/',
    'test1/test2/test3/',
    'test0/',
    'test0/test-1',
    'test0/test-1/test-2',
    '',
  ];

  expect(getParentsOf(keys, '/test1/test2/test3/test4.hs')).toStrictEqual(
    expected
  );
});
