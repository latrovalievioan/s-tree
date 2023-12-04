import './IconButton.css';

type Props = {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const IconButton: React.FC<Props> = ({
  icon,
  title,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      data-testid="icon-button"
      className="action"
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {icon}
    </button>
  );
};
