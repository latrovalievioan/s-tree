import './styles.css';
import { SVGProps } from 'react';

type Props = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  onClick: () => void;
};

export const IconButton: React.FC<Props> = ({ Icon, onClick }) => {
  return (
    <button className="action" onClick={onClick}>
      <Icon />
    </button>
  );
};
