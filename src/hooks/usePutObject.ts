import { putObject } from '@/api';
import { useClientStore } from '@/store';
import { useMutation } from '@tanstack/react-query';

export const usePutObject = (onSuccess: () => void) => {
  const { client, bucket } = useClientStore();

  return useMutation({
    mutationFn: async (params: { key: string; body: string }) => {
      if (!client) return;
      return putObject(client, bucket, params);
    },
    onSuccess,
  });
};
