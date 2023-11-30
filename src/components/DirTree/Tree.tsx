import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, isDir } from '@/utils';
import { TreeItem } from '../UI/Buttons/TreeItem';

type Props = {
  prefix?: string;
};

export const Tree: React.FC<Props> = ({ prefix = '' }) => {
  const objects = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects);
  const { toggleExpandedDir, selectedObject, setSelectedObject } = useStore();
  const isExpanded = useStore((state) => state.expandedDirs.has(prefix));
  const isSelected = selectedObject === prefix;

  return (
    <ul>
      <TreeItem
        title={prefix}
        isSelected={isSelected}
        isExpanded={isExpanded}
        onClick={() => toggleExpandedDir(prefix)}
        onDoubleClick={() => setSelectedObject(prefix)}
      />
      {isExpanded &&
        directChildren.map((c) => {
          return (
            isDir(c) && (
              <li key={c}>
                <Tree prefix={c} />
              </li>
            )
          );
        })}
    </ul>
  );
};
