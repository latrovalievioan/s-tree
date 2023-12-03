import './styles.css';

type Props = {
  onSubmit: () => void;
  name: string;
  children?: React.ReactNode;
};

export const Form: React.FC<Props> = ({ name, onSubmit, children }) => {
  return (
    <form
      data-testid={`form-${name}`}
      name={name}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};
