import './styles.css';
import { AddDirIcon } from '@/assets/AddDirIcon';
import { Modal } from '@/components/UI/Modal';
import { useStore } from '@/store';
import { useRef } from 'react';

export const AddDir = () => {
  const { selectedObject } = useStore();
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
    <>
      <button onClick={openDialog}>
        <AddDirIcon className="action" />{' '}
      </button>
      <Modal title="Add a directory:" ref={dialogRef} onClose={closeDialog}>
        <div className="modalContent">
          <div>
            <div>
              <span>Parent Directory:</span>
              <span>{selectedObject}</span>
            </div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <button>Done</button>
        </div>
      </Modal>
    </>
  );
};
