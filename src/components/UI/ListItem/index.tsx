import { ListItemIcons } from './ListItemIcons';
import './styles.css';
import { useGetDisplayName } from '@/utils';

type Props = {
  title: string;
  isSelected: boolean;
  isExpanded: boolean;
  isFromTree: boolean;
  isExpandable: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
};

export const ListItem: React.FC<Props> = ({
  title,
  isSelected,
  isExpanded,
  isFromTree,
  isExpandable,
  onClick,
  onDoubleClick,
}) => {
  return (
    <button
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
      {useGetDisplayName(title)}
    </button>
  );
};
