import { render, screen, cleanup } from '@testing-library/react';
import { ListItemIcons } from './ListItemIcons';

describe(ListItemIcons, () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render ClosedDir icon when the title is a dir key and isExpandable is false', () => {
    render(
      <ListItemIcons
        title="test-dir/"
        isExpandable={false}
        isExpanded={false}
        isFromTree
      />
    );

    const closedDirIcon = screen.getByTestId('closed-dir-icon');

    expect(closedDirIcon).toBeInTheDocument();
    expect(closedDirIcon).toBeVisible();
  });

  it('Should render FileIcon when the title is not a dir key and isExpandable is false', () => {
    render(
      <ListItemIcons
        title="test-dir"
        isExpandable={false}
        isExpanded={false}
        isFromTree
      />
    );

    const fileIcon = screen.getByTestId('file-icon');

    expect(fileIcon).toBeInTheDocument();
    expect(fileIcon).toBeVisible();
  });

  it('Should render Chevron and OpenDir if isExpandable and isExpanded', () => {
    render(
      <ListItemIcons title="test-dir" isExpandable isExpanded isFromTree />
    );

    const chevron = screen.getByTestId('chevron-icon');

    expect(chevron).toBeInTheDocument();
    expect(chevron).toBeVisible();

    const openDir = screen.getByTestId('open-dir-icon');

    expect(openDir).toBeInTheDocument();
    expect(openDir).toBeVisible();
  });

  it('Should render Chevron and ClosedDir if isExpandable and isExpanded=false', () => {
    render(
      <ListItemIcons
        title="test-dir"
        isExpandable
        isExpanded={false}
        isFromTree
      />
    );

    const chevron = screen.getByTestId('chevron-icon');

    expect(chevron).toBeInTheDocument();
    expect(chevron).toBeVisible();

    const closedDir = screen.getByTestId('closed-dir-icon');

    expect(closedDir).toBeInTheDocument();
    expect(closedDir).toBeVisible();
  });
});
