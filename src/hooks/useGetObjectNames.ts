import { useQuery } from '@tanstack/react-query';
import { listObjects } from '@/api';
import { useClientStore } from '@/store';

export const useGetObjectNames = () => {
  const { client, bucket } = useClientStore();

  const { data } = useQuery({
    queryKey: ['objects', client, bucket],
    queryFn: async () => {
      if (!client || !bucket) return;
      const list = await listObjects(client, bucket);

      if (!list?.Contents) return [];

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
    },
    enabled: !!client && !!bucket,
  });

  return data || [];
};
