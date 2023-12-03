import React from 'react';
import './FormSubmitButton.css';
import { Spinner } from '@/components/UI/Spinner';

type Props = {
  isPending: boolean;
  isDisabled?: boolean;
};
export const FormSubmitButton: React.FC<Props> = ({
  isPending,
  isDisabled,
}) => {
  return (
    <button
      data-testid="form-submit"
      type="submit"
      disabled={isPending || isDisabled}
    >
      {isPending ? (
        <Spinner skin="dark" width={24} height={24} border={2} />
      ) : (
        'Done'
      )}
    </button>
  );
};
