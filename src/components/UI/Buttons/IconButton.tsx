import './IconButton.css';
import { SVGProps } from 'react';

type Props = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
  disabled?: boolean;
};

export const IconButton: React.FC<Props> = ({
  Icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      data-testid="icon-button"
      className="action"
      disabled={disabled}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
};
