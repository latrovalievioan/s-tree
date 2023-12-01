import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { Modal } from '../Modal';
import { ErrorMessage } from '../ErrorMessage';
import { useEffect, useRef } from 'react';

type Props = {
  message?: string;
};
export const ErrorModal: React.FC<Props> = ({
  message = DEFAULT_ERROR_MESSAGE,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.close();
    ref.current.showModal();
  }, []);

  return (
    <Modal ref={ref} title="Error:" nonEscapable onClose={() => {}}>
      <ErrorMessage message={message} />
    </Modal>
  );
};
