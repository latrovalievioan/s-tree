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
  isExpandable?: boolean;
};

const TreeItemIcons: React.FC<{
  isExpandable: boolean;
  isExpanded: boolean;
}> = ({ isExpandable, isExpanded }) => {
  if (!isExpandable) return <ClosedDir className="treeItemIcon" />;
  return (
    <>
      <ChevronRight
        id="chevron"
        className={`treeItemIcon ${isExpanded ? 'expanded' : 'collapsed'}`}
      />
      {isExpanded ? (
        <OpenDir className="treeItemIcon" />
      ) : (
        <ClosedDir className="treeItemIcon" />
      )}
    </>
  );
};

export const TreeItem: React.FC<Props> = ({
  title,
  isSelected,
  isExpanded,
  onClick,
  onDoubleClick,
  isExpandable = true,
}) => {
  return (
    <button
      className={`treeItem ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <TreeItemIcons isExpanded={isExpanded} isExpandable={isExpandable} />
      {getDisplayName(title)}
    </button>
  );
};
