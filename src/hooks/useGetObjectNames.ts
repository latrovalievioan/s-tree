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

      return generateObjectNames(list);
    },
    enabled: !!client && !!bucket,
    refetchInterval: 1000 * 10,
  });
};
