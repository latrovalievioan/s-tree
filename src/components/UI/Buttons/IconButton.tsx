import './IconButton.css';

type Props = {
  icon: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
};

export const IconButton: React.FC<Props> = ({
  icon,
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
      {icon}
    </button>
  );
};
