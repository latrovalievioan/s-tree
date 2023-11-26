import "./styles.css";
import { useGetObjectNames } from "@/hooks/useGetObjectNames";
import { useStore } from "@/store";
import { getDirectChildren, getDisplayName, isDir } from "@/utils";
import { ChevronRight } from "@/assets/ChevronRight";
import { OpenDir } from "@/assets/OpenDir";
import { ClosedDir } from "@/assets/ClosedDir";

type Props = {
  prefix?: string;
};

const Tree: React.FC<Props> = ({ prefix = "" }) => {
  const objects = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects);
  const { expandedDirs, toggleExpandedDir } = useStore();

  return (
    <ul>
      <button className="dirTreeItem" onClick={() => toggleExpandedDir(prefix)}>
        <ChevronRight
          id="chevron"
          className={`dirItemIcon ${
            expandedDirs.has(prefix) ? "expanded" : "collapsed"
          }`}
        />
        {expandedDirs.has(prefix) ? (
          <OpenDir className="dirItemIcon" />
        ) : (
          <ClosedDir className="dirItemIcon" />
        )}
        {getDisplayName(prefix) || "root"}
      </button>
      {directChildren.map((c) => {
        return (
          isDir(c) &&
          expandedDirs.has(prefix) && (
            <li key={c}>
              <Tree prefix={c} />
            </li>
          )
        );
      })}
    </ul>
  );
};

export const DirTree = () => (
  <div id="dirTree">
    <Tree />
  </div>
);
