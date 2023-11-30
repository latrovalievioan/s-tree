import './styles.css';
import { Modal } from '@/components/UI/Modal';
import { useRef } from 'react';
import { AddObject } from './AddObject';
import { AddFileIcon } from '@/assets/AddFileIcon';
import { IconButton } from '@/components/UI/Buttons/IconButton';

export const AddFile = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
  };

  const openDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.showModal();
  };

  return (
    <>
      <IconButton Icon={AddFileIcon} onClick={openDialog} />
      <Modal title="Add a file:" ref={dialogRef} onClose={closeDialog}>
        <AddObject type="file" closeDialog={closeDialog} />
      </Modal>
    </>
  );
};
