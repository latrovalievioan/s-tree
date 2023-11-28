import { useQuery } from 'react-query';
import { listObjects } from '@/api';

export const useGetObjectNames = () => {
  const { data } = useQuery('objects', async () => {
    const list = await listObjects();

    if (!list.Contents) return [];

    const objs: Set<string> = new Set();
    for (let n = 0; n < list.Contents.length; n++) {
      const str = list.Contents[n].Key || '';

      for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (currentChar === '/' || i === str.length - 1) {
          objs.add(str.slice(0, i + 1));
        }
      }
    }

    return [...objs];
  });

  return data || [];
};
