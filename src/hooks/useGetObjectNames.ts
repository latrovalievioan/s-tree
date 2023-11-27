import { useQuery } from 'react-query';
import { listObjects } from '@/api';

export const useGetObjectNames = () => {
  const { data } = useQuery('objects', listObjects);
  if (!data?.Contents) return [];

  const objects = data.Contents.flatMap((c) => {
    const objs: string[] = [];
    const str = c.Key || '';
    let accString = '';

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      accString += currentChar;
      if (currentChar === '/' || i === str.length - 1) objs.push(accString);
    }

    return objs;
  });

  return [...new Set(objects)];
};
