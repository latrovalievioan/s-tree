import { render, screen, cleanup } from '@testing-library/react';
import { Spinner } from '.';

describe('Modal', () => {
  beforeEach(() => {
    render(<Spinner width={10} height={10} border={2} skin="light" />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner).toBeInTheDocument();
    expect(spinner).toBeVisible();
  });

  it('The width, height and border of the component should be as passed', () => {
    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner.style.width).toEqual('10px');
    expect(spinner.style.height).toEqual('10px');
    expect(spinner.style.borderWidth).toEqual('2px');
  });

  it('Should set the correct className for skin', () => {
    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner.className).toContain('lightSkin');
  });

  it('Matches snapshot', () => {
    const spinner = screen.getByTestId('loading-spinner');

    expect(spinner).toMatchSnapshot();
  });
});
