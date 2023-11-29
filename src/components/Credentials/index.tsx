import { useEffect, useReducer, useRef } from 'react';
import { Modal } from '@/components/UI/Modal';
import { Spinner } from '../UI/Spinner';
import { initialInputValues, inputValuesReducer } from './reducer';
import { useInitializeClient } from '@/hooks/useInitializeClient';

export const Credentials = () => {
  const [inputValues, dispatchInputValue] = useReducer(
    inputValuesReducer,
    initialInputValues
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addCredentialsToStorage = () => {
    localStorage.setItem('credentials', JSON.stringify(inputValues));
  };

  const closeDialog = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  };

  const onSuccess = () => {
    addCredentialsToStorage();
    closeDialog();
  };

  const { mutate, isPending, error } = useInitializeClient(onSuccess);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [dialogRef.current]);

  return (
    <Modal
      title="Bucket credentials"
      onClose={closeDialog}
      ref={dialogRef}
      nonEscapable
    >
      <form
        className="modalContent"
        onSubmit={(e) => {
          e.preventDefault();
          mutate(inputValues);
        }}
      >
        <input
          placeholder="Access Key Id"
          type="text"
          required
          value={inputValues.accessKeyId}
          onChange={(e) =>
            dispatchInputValue({
              type: 'setAccessKeyId',
              payload: e.target.value,
            })
          }
        />
        <input
          placeholder="Secret Access Key"
          type="text"
          required
          value={inputValues.secretAccessKey}
          onChange={(e) =>
            dispatchInputValue({
              type: 'setSecretAccessKey',
              payload: e.target.value,
            })
          }
        />
        <input
          placeholder="Region"
          type="text"
          required
          value={inputValues.region}
          onChange={(e) =>
            dispatchInputValue({
              type: 'setRegion',
              payload: e.target.value,
            })
          }
        />
        <input
          placeholder="Bucket"
          type="text"
          required
          value={inputValues.bucket}
          onChange={(e) =>
            dispatchInputValue({
              type: 'setBucket',
              payload: e.target.value,
            })
          }
        />

        <button disabled={isPending} className={isPending ? 'innactive' : ''}>
          {false ? <Spinner width={24} height={24} border={2} /> : 'Done'}
        </button>
      </form>
    </Modal>
  );
};
