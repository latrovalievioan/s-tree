import './styles.css';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';

type Props = {
  message?: string;
};

export const ErrorMessage: React.FC<Props> = ({
  message = DEFAULT_ERROR_MESSAGE,
}) => {
  return (
    <div data-testid="error-message" className="error">
      {message}
    </div>
  );
};
