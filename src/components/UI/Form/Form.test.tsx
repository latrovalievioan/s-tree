import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Form } from '.';

describe(Form, () => {
  let count = 0;
  beforeEach(() => {
    render(
      <Form
        onSubmit={() => {
          count++;
        }}
        name="test_form"
      >
        <div>HELLO</div>
      </Form>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    const form = screen.getByTestId('form-test_form');

    expect(form).toBeInTheDocument();
    expect(form).toBeVisible();
  });

  it('Should render the passed children correctly', () => {
    const form = screen.getByTestId('form-test_form');

    expect(form).toContainHTML('<div>HELLO</div>');
  });

  it('Should execute the onSubmit prop when submit', () => {
    const form = screen.getByTestId('form-test_form');

    fireEvent.submit(form);

    expect(count).toEqual(1);
  });

  it('Matches snapshot', () => {
    const form = screen.getByTestId('form-test_form');

    expect(form).toMatchSnapshot();
  });
});
