import { initializeClient } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useInitializeClient = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: initializeClient,
    onSuccess,
  });
};
