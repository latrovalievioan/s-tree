import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, getDisplayName, isDir } from '@/utils';
import { ChevronRight } from '@/assets/ChevronRight';
import { OpenDir } from '@/assets/OpenDir';
import { ClosedDir } from '@/assets/ClosedDir';

type Props = {
  prefix?: string;
};

export const Tree: React.FC<Props> = ({ prefix = '' }) => {
  const objects = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects);
  const { toggleExpandedDir, selectedObject, setSelectedObject } = useStore();
  const isExpanded = useStore((state) => state.expandedDirs.has(prefix));

  return (
    <ul>
      <button
        className={`dirTreeItem ${selectedObject === prefix ? 'selected' : ''}`}
        onClick={() => toggleExpandedDir(prefix)}
        onDoubleClick={() => setSelectedObject(prefix)}
      >
        <ChevronRight
          id="chevron"
          className={`dirItemIcon ${isExpanded ? 'expanded' : 'collapsed'}`}
        />
        {isExpanded ? (
          <OpenDir className="dirItemIcon" />
        ) : (
          <ClosedDir className="dirItemIcon" />
        )}
        {getDisplayName(prefix)}
      </button>
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
