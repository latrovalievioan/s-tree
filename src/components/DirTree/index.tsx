import { useGetObjectNames } from "@/hooks/useGetObjectNames";
import { useStore } from "@/store";
import { getDirectChildren, isDir } from "@/utils";

type Props = {
  prefix?: string;
};

export const DirTree: React.FC<Props> = ({ prefix = "" }) => {
  const objects = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects);
  const { expandedDirs, toggleExpandedDir } = useStore();

  return (
    <div>
      <ul>
        <div onClick={() => toggleExpandedDir(prefix)}>{prefix || "root"}</div>
        {directChildren.map((c) => {
          return (
            isDir(c) &&
            expandedDirs.has(prefix) && (
              <li key={c}>
                <DirTree prefix={c} />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
