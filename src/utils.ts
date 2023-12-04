import { _Object } from '@aws-sdk/client-s3';
import { initializeClient } from './api';
import { CredentialsType } from './types';

export const isDir = (s: string) => s.endsWith('/') || s === '';
export const getDepth = (s: string) => {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '/') depth++;
  }
  return isDir(s) ? depth : depth + 1;
};

export const getDirectChildren = (prefix: string, objects: string[]) => {
  return objects.filter((o) => {
    const currentDepth = getDepth(prefix);
    const isFromSubtree = o.startsWith(prefix);
    const objectDepth = getDepth(o);
    const isDeeperByOne = objectDepth === currentDepth + 1;

    return isDeeperByOne && isFromSubtree;
  });
};

export const getDisplayName = (key: string, bucket: string) => {
  const split = key.split('/');

  if (!key.length) return 's3://' + bucket;

  return isDir(key) ? split[split.length - 2] : split[split.length - 1];
};

export const addCredentialsToStorage = (credentials: CredentialsType) => {
  localStorage.setItem('credentials', JSON.stringify(credentials));
};

export const initializeClientFromStorage = async () => {
  const storageCredentials = localStorage.getItem('credentials');
  if (!storageCredentials)
    return {
      client: undefined,
      bucket: '',
    };

  const parsedCredentials: CredentialsType = JSON.parse(storageCredentials);

  return await initializeClient(parsedCredentials);
};

export const isParentOf = (parent: string, child: string) => {
  return child.includes(parent) && parent !== child;
};

export const getParentsOf = (keys: string[], child: string) => {
  return keys.filter((k) => isParentOf(k, child));
};

export const getParentDir = (key: string) => {
  for (let i = isDir(key) ? key.length - 2 : key.length - 1; i > 0; i--) {
    if (key[i] === '/') {
      return key.slice(0, i + 1);
    }
  }

  return '';
};

export const generateObjectNames = (objs: _Object[]) => {
  const names: Set<string> = new Set();
  for (let n = 0; n < objs.length; n++) {
    const str = objs[n].Key || '';

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentChar === '/' || i === str.length - 1) {
        names.add(str.slice(0, i + 1));
      }
    }
  }

  return [...names];
};
