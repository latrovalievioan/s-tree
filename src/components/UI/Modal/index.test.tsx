import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Modal } from '.';

describe('Modal', () => {
  let count = 0;
  beforeEach(() => {
    render(
      <Modal
        title="test"
        onClose={() => {
          count++;
        }}
        nonEscapable={false}
      >
        <div>TEST</div>
      </Modal>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Should render the component and it shouldn't be visible by default", () => {
    const modal = screen.getByTestId('modal-test');

    expect(modal).toBeInTheDocument();
    expect(modal).not.toBeVisible();
  });

  it('Should render the passed children correctly', () => {
    const modal = screen.getByTestId('modal-test');

    expect(modal).toContainHTML('<div>TEST</div>');
  });

  it('Should execute the onClose prop when escapable and the Close icon is clicked', () => {
    const button = screen.getByTestId('icon-button');

    fireEvent.click(button);

    expect(count).toEqual(1);
  });

  it('Matches snapshot', () => {
    const modal = screen.getByTestId('modal-test');

    expect(modal).toMatchSnapshot();
  });
});
