import './styles.css';
import { AddDirIcon } from '@/assets/AddDirIcon';
import { Modal } from '@/components/UI/Modal';
import { useRef } from 'react';
import { AddObject } from './AddObject';

export const AddDir = () => {
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
        <AddDirIcon className="action" />
      </button>
      <Modal title="Add a directory:" ref={dialogRef} onClose={closeDialog}>
        <AddObject type="directory" closeDialog={closeDialog} />
      </Modal>
    </>
  );
};
