import './styles.css';
import { AddDirIcon } from '@/assets/AddDirIcon';
import { Modal } from '@/components/UI/Modal';
import { usePutObject } from '@/hooks/usePutObject';
import { useStore } from '@/store';
import { useRef } from 'react';

export const AddDir = () => {
  const { selectedObject } = useStore();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dirNameRef = useRef<HTMLInputElement>(null);

  const { mutateAsync } = usePutObject();

  const createDir = () => {
    if (!dirNameRef.current) return;

    mutateAsync({
      key: selectedObject + dirNameRef.current.value + '/',
      body: '',
    });
  };

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
            <input ref={dirNameRef} type="text" />
          </div>
          <button onClick={() => createDir()}>Done</button>
        </div>
      </Modal>
    </>
  );
};
