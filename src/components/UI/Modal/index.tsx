import { Close } from '@/assets/Close';
import './styles.css';
import { forwardRef } from 'react';
import { IconButton } from '../Buttons/IconButton';

type Props = {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  nonEscapable?: boolean;
};

export const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ title, onClose, children, nonEscapable = false }, ref) => {
    return (
      <dialog
        ref={ref}
        onKeyDown={(e: React.KeyboardEvent<HTMLDialogElement>) => {
          if (nonEscapable && e.key === 'Escape') {
            e.preventDefault();
          }
        }}
      >
        <header>
          <h2>{title}</h2>
          {!nonEscapable && <IconButton Icon={Close} onClick={onClose} />}
        </header>
        {children}
      </dialog>
    );
  }
);
