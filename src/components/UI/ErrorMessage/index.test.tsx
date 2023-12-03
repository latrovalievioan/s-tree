import { render, screen, cleanup } from '@testing-library/react';
import { ErrorMessage } from '.';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';

describe(ErrorMessage, () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    render(<ErrorMessage />);
    const errorMessage = screen.getByTestId('error-message');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBeVisible();
  });

  it('Should show the correct default string', () => {
    render(<ErrorMessage />);
    const errorMessage = screen.getByTestId('error-message');

    expect(errorMessage).toHaveTextContent(DEFAULT_ERROR_MESSAGE);
  });

  it('Should show the passed message', () => {
    const testMessage = 'this is a test message';
    render(<ErrorMessage message={testMessage} />);
    const errorMessage = screen.getByTestId('error-message');

    expect(errorMessage).toHaveTextContent(testMessage);
  });

  it('Matches snapshot', () => {
    render(<ErrorMessage />);
    const errorMessage = screen.getByTestId('error-message');

    expect(errorMessage).toMatchSnapshot();
  });
});
