import { AddDir } from '@/assets/AddDir';
import { AddFileIcon } from '@/assets/AddFileIcon';
import { Trash } from '@/assets/Trash';
import { useRef } from 'react';
import { Modal } from '../UI/Modal';

export const Actions = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    if (!dialogRef.current) return;

    dialogRef.current.close();
  };

  return (
    <div id="actionsMenu">
      <AddFileIcon className="action" onClick={openDialog} />
      <AddDir className="action" />
      <Trash className="action" />
      <Modal title="Yeah" ref={dialogRef} onClose={closeDialog} />
    </div>
  );
};
