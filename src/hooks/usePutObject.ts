import { putObject } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const usePutObject = (onSuccess: () => void) => {
  return useMutation({ mutationFn: putObject, onSuccess });
};
