import { Trash } from '@/assets/Trash';
import { FormSubmitButton } from '@/components/UI/Buttons/FormSubmitButton';
import { IconButton } from '@/components/UI/Buttons/IconButton';
import { Form } from '@/components/UI/Form';
import { Modal } from '@/components/UI/Modal';
import { DELETE_CONFIRMATION_STRING } from '@/constants';
import { useDeleteObject } from '@/hooks/useDeleteObject';
import { useStore } from '@/store';
import { getDisplayName } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';

export const DeleteObject = () => {
  const [confirmationText, setConfirmationText] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const queryClient = useQueryClient();

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['objects'] });
    setConfirmationText('');
    closeDialog();
  };
  const { mutateAsync, isPending } = useDeleteObject(onSuccess);

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

  const { selectedObjectForAction } = useStore();

  const deleteObject = () => {
    if (confirmationText !== DELETE_CONFIRMATION_STRING) return;

    mutateAsync(selectedObjectForAction);
  };

  return (
    <>
      <IconButton Icon={Trash} onClick={openDialog} />
      <Modal
        title={`Delete ${getDisplayName(selectedObjectForAction)}`}
        ref={dialogRef}
        onClose={closeDialog}
      >
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
