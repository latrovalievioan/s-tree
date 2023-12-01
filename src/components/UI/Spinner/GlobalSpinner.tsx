import './styles.css';
import { useEffect, useRef } from 'react';
import { Spinner } from '.';

export const GlobalSpinner = () => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.close();
    ref.current.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      className="globalSpinner"
      onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
          e.preventDefault();
        }
      }}
    >
      <Spinner width={50} height={50} border={4} />
    </dialog>
  );
};
