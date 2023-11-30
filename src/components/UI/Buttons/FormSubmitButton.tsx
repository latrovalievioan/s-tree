import { Spinner } from '@/components/UI/Spinner';
import React from 'react';

type Props = {
  isPending: boolean;
  isDisabled?: boolean;
};
export const FormSubmitButton: React.FC<Props> = ({
  isPending,
  isDisabled,
}) => {
  return (
    <button type="submit" disabled={isPending || isDisabled}>
      {isPending ? <Spinner width={24} height={24} border={2} /> : 'Done'}
    </button>
  );
};
