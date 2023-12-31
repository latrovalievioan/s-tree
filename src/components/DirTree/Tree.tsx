import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useAppStore, useClientStore } from '@/store';
import { getDirectChildren, isDir } from '@/utils';
import { ListItem } from '@/components/UI/ListItem';

type Props = {
  prefix?: string;
};

export const Tree: React.FC<Props> = ({ prefix = '' }) => {
  const { data: objects } = useGetObjectNames();
  const { bucket } = useClientStore();
  const { toggleExpandedDir, setSelectedObject } = useAppStore();
  const isExpanded = useAppStore((state) => state.expandedDirs.has(prefix));
  const isSelected = useAppStore((state) => state.selectedObject === prefix);

  const directChildren = getDirectChildren(prefix, objects || []);
  const hasDirsAsDirectChildren = directChildren.filter(isDir).length;

  return (
    <ul>
      <ListItem
        title={prefix}
        bucket={bucket}
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
