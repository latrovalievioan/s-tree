import { deleteObject } from '@/api';
import { useClientStore } from '@/store';
import { useMutation } from '@tanstack/react-query';

export const useDeleteObject = (onSuccess: () => void) => {
  const { client, bucket } = useClientStore();

  return useMutation({
    mutationFn: async (key: string) => {
      if (!client) return;
      return deleteObject(client, bucket, key);
    },
    onSuccess,
  });
};
