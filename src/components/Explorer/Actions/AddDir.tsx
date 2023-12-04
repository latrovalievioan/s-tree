import { AddDirIcon } from '@/assets/AddDirIcon';
import { Modal } from '@/components/UI/Modal';
import { useRef } from 'react';
import { AddObject } from './AddObject';
import { IconButton } from '@/components/UI/Buttons/IconButton';

export const AddDir = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
  };

  const openDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
    dialogRef.current.showModal();
  };

  return (
    <>
      <IconButton
        title="Add Directory"
        icon={<AddDirIcon />}
        onClick={openDialog}
      />
      <Modal title="Add a directory:" ref={dialogRef} onClose={closeDialog}>
        <AddObject
          formName={'addDir'}
          type="directory"
          closeDialog={closeDialog}
        />
      </Modal>
    </>
  );
};
