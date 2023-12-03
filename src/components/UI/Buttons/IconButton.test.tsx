import { render, screen, cleanup } from '@testing-library/react';
import { IconButton } from './IconButton';
import { AddFileIcon } from '@/assets/AddFileIcon';

describe(IconButton, () => {
  beforeEach(() => {
    render(<IconButton Icon={AddFileIcon} disabled onClick={() => {}} />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    const iconButton = screen.getByTestId('icon-button');
    expect(iconButton).toBeInTheDocument();
    expect(iconButton).toBeVisible();
  });

  it('Shoud disable the button when disabled=true', () => {
    const iconButton = screen.getByTestId('icon-button');
    expect(iconButton).toBeDisabled();
  });

  it('Matches snapshot', () => {
    const iconButton = screen.getByTestId('icon-button');

    expect(iconButton).toMatchSnapshot();
  });
});
