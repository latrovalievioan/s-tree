import { getObject } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useGetObject = (key: string) => {
  const { data } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await getObject(key);
      return (await response?.Body?.transformToString()) || '';
    },
  });
  return data;
};
