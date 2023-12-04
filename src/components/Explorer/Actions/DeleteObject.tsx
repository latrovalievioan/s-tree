import { Trash } from '@/assets/Trash';
import { FormSubmitButton } from '@/components/UI/Buttons/FormSubmitButton';
import { IconButton } from '@/components/UI/Buttons/IconButton';
import { ErrorMessage } from '@/components/UI/ErrorMessage';
import { Form } from '@/components/UI/Form';
import { Modal } from '@/components/UI/Modal';
import { DELETE_CONFIRMATION_STRING } from '@/constants';
import { useDeleteObject } from '@/hooks/useDeleteObject';
import { useAppStore, useClientStore } from '@/store';
import { getDisplayName } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export const DeleteObject = () => {
  const queryClient = useQueryClient();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { selectedObjectForAction } = useAppStore();
  const { bucket } = useClientStore();
  const [confirmationText, setConfirmationText] = useState('');

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['objects'] });
    setConfirmationText('');
    closeDialog();
  };

  const { mutateAsync, isPending, error } = useDeleteObject(onSuccess);

  const closeDialog = () => {
    if (!dialogRef.current) return;
    setConfirmationText('');
    dialogRef.current.close();
  };

  const openDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
    dialogRef.current.showModal();
  };

  const deleteObject = () => {
    if (confirmationText !== DELETE_CONFIRMATION_STRING) return;

    mutateAsync(selectedObjectForAction);
  };

  return (
    <>
      <IconButton
        title="Delete Selected"
        disabled={selectedObjectForAction === ''}
        icon={<Trash />}
        onClick={openDialog}
      />
      <Modal
        title={`Delete ${getDisplayName(selectedObjectForAction, bucket)}`}
        ref={dialogRef}
        onClose={closeDialog}
      >
        {error && <ErrorMessage />}
        <Form name="deleteObject" onSubmit={deleteObject}>
          <div>
            <input
              value={confirmationText}
              placeholder={DELETE_CONFIRMATION_STRING}
              type="text"
              pattern={DELETE_CONFIRMATION_STRING}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmationText(e.target.value)
              }
            />
            <em>
              *Deleting is permanent, type "DELETE" to confirm your action:
            </em>
          </div>
          <FormSubmitButton
            isPending={isPending}
            isDisabled={confirmationText !== DELETE_CONFIRMATION_STRING}
          />
        </Form>
      </Modal>
    </>
  );
};
