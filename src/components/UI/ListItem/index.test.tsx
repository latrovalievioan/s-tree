import { render, screen, cleanup } from '@testing-library/react';
import { ListItem } from '.';

describe(ListItem, () => {
  beforeEach(() => {
    render(
      <ListItem
        title="test_title"
        bucket="test_bucket"
        isSelected
        isExpanded
        isFromTree
        isExpandable
        onClick={() => {}}
        onDoubleClick={() => {}}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render the component', () => {
    const listItem = screen.getByTestId('list-item-test_title');

    expect(listItem).toBeInTheDocument();
    expect(listItem).toBeVisible();
  });

  it('Should have the correct className', () => {
    const listItem = screen.getByTestId('list-item-test_title');

    expect(listItem).toHaveClass('selected');
  });

  it('Matches snapshot', () => {
    const listItem = screen.getByTestId('list-item-test_title');

    expect(listItem).toMatchSnapshot();
  });
});
