import { ListItemIcons } from './ListItemIcons';
import './styles.css';
import { getDisplayName } from '@/utils';

type Props = {
  title: string;
  bucket: string;
  isSelected: boolean;
  isExpanded: boolean;
  isFromTree: boolean;
  isExpandable: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
};

export const ListItem: React.FC<Props> = ({
  title,
  bucket,
  isSelected,
  isExpanded,
  isFromTree,
  isExpandable,
  onClick,
  onDoubleClick,
}) => {
  return (
    <button
      data-testid={`list-item-${title}`}
      className={`listItem ${isSelected ? 'selected' : ''}`}
      onClick={(e) => {
        e.detail === 1 ? onClick() : onDoubleClick();
      }}
    >
      <ListItemIcons
        title={title}
        isExpanded={isExpanded}
        isExpandable={isExpandable}
        isFromTree={isFromTree}
      />
      {getDisplayName(title, bucket)}
    </button>
  );
};
