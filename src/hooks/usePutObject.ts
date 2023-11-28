import { putObject } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const usePutObject = () => {
  return useMutation({ mutationFn: putObject });
};
