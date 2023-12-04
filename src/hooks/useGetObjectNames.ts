import { useQuery } from '@tanstack/react-query';
import { listObjects } from '@/api';
import { useClientStore } from '@/store';
import { generateObjectNames } from '@/utils';

export const useGetObjectNames = () => {
  const { client, bucket } = useClientStore();

  return useQuery({
    queryKey: ['objects', client, bucket],
    queryFn: async () => {
      if (!client || !bucket) return [];
      const list = await listObjects(client, bucket);

      if (!list?.Contents) return [];

      return generateObjectNames(list.Contents);
    },
    enabled: !!client && !!bucket,
    refetchInterval: 1000 * 10,
  });
};
