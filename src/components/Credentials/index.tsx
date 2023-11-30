import { useEffect, useReducer, useRef } from 'react';
import { Modal } from '@/components/UI/Modal';
import { Spinner } from '../UI/Spinner';
import { initialInputValues, inputValuesReducer } from './reducer';
import { useMutation } from '@tanstack/react-query';
import { initializeClient } from '@/api';
import { S3Client } from '@aws-sdk/client-s3';
import { useClientStore } from '@/store';

export const Credentials = () => {
  const [inputValues, dispatchInputValue] = useReducer(
    inputValuesReducer,
    initialInputValues
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addCredentialsToStorage = () => {
    localStorage.setItem('credentials', JSON.stringify(inputValues));
  };

  const { setClient, setBucket } = useClientStore();

  const closeDialog = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  };

  const onSuccess = (client: S3Client) => {
    addCredentialsToStorage();
    setClient(client);
    setBucket(inputValues.bucket);
    closeDialog();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: initializeClient,
    onSuccess: (client) => {
      onSuccess(client);
    },
  });

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
          type="password"
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
          {isPending ? <Spinner width={24} height={24} border={2} /> : 'Done'}
        </button>
      </form>
    </Modal>
  );
};
