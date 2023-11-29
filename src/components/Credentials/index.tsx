import { useEffect, useRef } from 'react';
import { Modal } from '@/components/UI/Modal';

export const Credentials = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
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
        }}
      ></form>
    </Modal>
  );
};
