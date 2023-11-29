import './styles.css';
import { Modal } from '@/components/UI/Modal';
import { useRef } from 'react';
import { AddObject } from './AddObject';
import { AddFileIcon } from '@/assets/AddFileIcon';

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
      <button onClick={openDialog}>
        <AddFileIcon className="action" />
      </button>
      <Modal title="Add a file:" ref={dialogRef} onClose={closeDialog}>
        <AddObject type="file" closeDialog={closeDialog} />
      </Modal>
    </>
  );
};
