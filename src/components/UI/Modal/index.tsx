import { Close } from '@/assets/Close';
import './styles.css';
import { forwardRef } from 'react';

type Props = {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ title, onClose, children }, ref) => {
    return (
      <dialog ref={ref}>
        <header>
          <h2>{title}</h2>
          <button id="closeModal" onClick={onClose}>
            <Close />
          </button>
        </header>
        {children}
      </dialog>
    );
  }
);
