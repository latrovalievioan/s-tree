import { getObject } from '@/api';
import { useQuery } from 'react-query';

export const useGetObject = (key: string) => {
  const { data } = useQuery(key, async () => {
    const response = await getObject(key);
    return (await response.Body?.transformToString()) || '';
  });
  return data;
};
