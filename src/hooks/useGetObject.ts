import { getObject } from '@/api';
import { useClientStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

export const useGetObject = (key: string) => {
  const { client, bucket } = useClientStore();

  return useQuery({
    queryKey: [key, client, bucket],
    queryFn: async () => {
      if (!client) return;
      const response = await getObject(client, bucket, key);
      return (await response?.Body?.transformToString()) || '';
    },
    enabled: !!client,
  });
};
