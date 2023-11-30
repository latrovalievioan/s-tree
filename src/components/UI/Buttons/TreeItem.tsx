import './TreeItem.css';
import { ChevronRight } from '@/assets/ChevronRight';
import { ClosedDir } from '@/assets/ClosedDir';
import { OpenDir } from '@/assets/OpenDir';
import { getDisplayName } from '@/utils';

type Props = {
  title: string;
  isSelected: boolean;
  isExpanded: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
};

export const TreeItem: React.FC<Props> = ({
  title,
  isSelected,
  isExpanded,
  onClick,
  onDoubleClick,
}) => {
  return (
    <button
      className={`treeItem ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <ChevronRight
        id="chevron"
        className={`treeItemIcon ${isExpanded ? 'expanded' : 'collapsed'}`}
      />
      {isExpanded ? (
        <OpenDir className="treeItemIcon" />
      ) : (
        <ClosedDir className="treeItemIcon" />
      )}
      {getDisplayName(title)}
    </button>
  );
};
