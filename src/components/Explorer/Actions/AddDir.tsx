import './styles.css';
import { AddDirIcon } from '@/assets/AddDirIcon';
import { Modal } from '@/components/UI/Modal';
import { OBJECT_NAME_REGEX } from '@/constants';
import { usePutObject } from '@/hooks/usePutObject';
import { useStore } from '@/store';
import { useRef, useState } from 'react';

export const AddDir = () => {
  const { selectedObject } = useStore();
  const dialogRef = useRef<HTMLDialogElement>(null);
  // const dirNameRef = useRef<HTMLInputElement>(null);
  const [dirName, setDirName] = useState('');

  const { mutateAsync } = usePutObject();

  const createDir = () => {
    mutateAsync({
      key: selectedObject + dirName + '/',
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
        <AddDirIcon className="action" />
      </button>
      <Modal title="Add a directory:" ref={dialogRef} onClose={closeDialog}>
        <form className="modalContent">
          <div>
            <label>Location:&nbsp;</label>
            <span>
              <i>{selectedObject}</i>
            </span>
          </div>
          <div>
            <input
              id="dirName"
              value={dirName}
              placeholder="Name"
              type="text"
              pattern={OBJECT_NAME_REGEX}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDirName(e.target.value)
              }
            />
            <div>
              <i className="inputRule">
                *Should not contain / or an empty space
              </i>
            </div>
          </div>
          <button onClick={() => createDir()}>Done</button>
        </form>
      </Modal>
    </>
  );
};
