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

export const generateBreadcrumbs = (s: string) => {
  let accString = '';
  const breadcrubsItems: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    accString += currentChar;

    if (currentChar === '/' || i === s.length - 1)
      breadcrubsItems.push(accString);

    if (currentChar === '/') accString = '';
  }

  return breadcrubsItems;
};

export const isParentOf = (parent: string, child: string) => {
  return child.includes(parent) && parent !== child;
};

export const getParentsOf = (keys: string[], child: string) => {
  return keys.filter((k) => isParentOf(k, child));
};
