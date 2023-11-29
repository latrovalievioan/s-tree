import { useEffect, useReducer, useRef } from 'react';
import { Modal } from '@/components/UI/Modal';
import { Spinner } from '../UI/Spinner';
import { initialInputValues, inputValuesReducer } from './reducer';
import { validateCredentials } from '@/api';

export const Credentials = () => {
  const [inputValues, dispatchInputValue] = useReducer(
    inputValuesReducer,
    initialInputValues
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addCredentialsToStorage = () => {
    Object.keys(inputValues).forEach((k: string) => {
      localStorage.setItem(k, inputValues[k as keyof typeof inputValues]);
    });
  };

  const closeDialog = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  };

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
          if (!validateCredentials(inputValues)) {
            console.log('TODO: HANDLE INVALID CREDENTIALS');
            return;
          }
          addCredentialsToStorage();
        }}
      >
        <input
          placeholder="Access Key Id"
          type="text"
          required
          value={inputValues.accessKeyId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatchInputValue({
              type: 'setBucket',
              payload: e.target.value,
            })
          }
        />

        <button
        // disabled={
        //   isPending || confirmationText !== DELETE_CONFIRMATION_STRING
        // }
        // className={isPending ? 'innactive' : ''}
        >
          {false ? <Spinner width={24} height={24} border={2} /> : 'Done'}
        </button>
      </form>
    </Modal>
  );
};
