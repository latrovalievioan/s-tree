import { deleteObject } from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useDeleteObject = (onSuccess: () => void) => {
  return useMutation({ mutationFn: deleteObject, onSuccess });
};
