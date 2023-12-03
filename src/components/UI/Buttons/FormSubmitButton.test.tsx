import { render, screen, cleanup } from '@testing-library/react';
import { FormSubmitButton } from './FormSubmitButton';

describe(FormSubmitButton, () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    render(<FormSubmitButton isPending={false} isDisabled />);
    const formSubmitButton = screen.getByTestId('form-submit');
    expect(formSubmitButton).toBeInTheDocument();
    expect(formSubmitButton).toBeVisible();
  });

  it('Should disable the button when disabled=true', () => {
    render(<FormSubmitButton isPending={false} isDisabled />);
    const formSubmitButton = screen.getByTestId('form-submit');
    expect(formSubmitButton).toBeDisabled();
  });

  it('Should be disabled when isPending=true', () => {
    render(<FormSubmitButton isPending />);
    const formSubmitButton = screen.getByTestId('form-submit');
    expect(formSubmitButton).toBeDisabled();
  });

  it('Should be enabled when neither isPending=true or isDisabled=true', () => {
    render(<FormSubmitButton isPending={false} />);
    const formSubmitButton = screen.getByTestId('form-submit');
    expect(formSubmitButton).toBeEnabled();
  });

  it('Should be contain "Done" when isPending=false', () => {
    render(<FormSubmitButton isPending={false} />);
    const formSubmitButton = screen.getByTestId('form-submit');
    expect(formSubmitButton).toHaveTextContent('Done');
  });

  it('Should display a spinner when isPending=true', () => {
    render(<FormSubmitButton isPending />);
    const formSubmitButton = screen.getByTestId('form-submit');
    const spinner = screen.getByTestId('loading-spinner');
    expect(formSubmitButton).toContainElement(spinner);
  });

  it('Matches snapshot', () => {
    render(<FormSubmitButton isPending={false} isDisabled />);
    const formSubmitButton = screen.getByTestId('form-submit');

    expect(formSubmitButton).toMatchSnapshot();
  });
});
