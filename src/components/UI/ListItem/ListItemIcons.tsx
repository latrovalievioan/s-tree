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
      <ClosedDir className={`listItemIcon ${isFromTree && 'shiftRight'}`} />
    ) : (
      <FileIcon className="listItemIcon" />
    );
  return (
    <>
      <ChevronRight
        id="chevron"
        className={`listItemIcon ${isExpanded ? 'expanded' : 'collapsed'}`}
      />
      {isExpanded ? (
        <OpenDir className="listItemIcon" />
      ) : (
        <ClosedDir className="listItemIcon" />
      )}
    </>
  );
};
