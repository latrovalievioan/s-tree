import './styles.css';
import { ChevronRight } from '@/assets/ChevronRight';
import { ClosedDir } from '@/assets/ClosedDir';
import { FileIcon } from '@/assets/FileIcon';
import { OpenDir } from '@/assets/OpenDir';
import { isDir } from '@/utils';

type Props = {
  title: string;
  isExpandable: boolean;
  isExpanded: boolean;
  isFromTree: boolean;
};

export const ListItemIcons: React.FC<Props> = ({
  title,
  isExpandable,
  isExpanded,
  isFromTree,
}) => {
  if (!isExpandable)
    return isDir(title) ? (
      <ClosedDir
        data-testid="closed-dir-icon"
        className={`listItemIcon ${isFromTree && 'shiftRight'}`}
      />
    ) : (
      <FileIcon data-testid="file-icon" className="listItemIcon" />
    );
  return (
    <>
      <ChevronRight
        data-testid="chevron-icon"
        className={`listItemIcon chevron ${
          isExpanded ? 'expanded' : 'collapsed'
        }`}
      />
      {isExpanded ? (
        <OpenDir data-testid="open-dir-icon" className="listItemIcon" />
      ) : (
        <ClosedDir data-testid="closed-dir-icon" className="listItemIcon" />
      )}
    </>
  );
};
