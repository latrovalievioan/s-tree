import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, isDir } from '@/utils';
import { ListItem } from '@/components/UI/ListItem';

type Props = {
  prefix?: string;
};

export const Tree: React.FC<Props> = ({ prefix = '' }) => {
  const { data: objects } = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects || []);
  const hasDirsAsDirectChildren = directChildren.filter(isDir).length;
  const { toggleExpandedDir, selectedObject, setSelectedObject } = useStore();
  const isExpanded = useStore((state) => state.expandedDirs.has(prefix));
  const isSelected = selectedObject === prefix;

  return (
    <ul>
      <ListItem
        title={prefix}
        isSelected={isSelected}
        isExpanded={isExpanded}
        isExpandable={!!hasDirsAsDirectChildren}
        isFromTree
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
