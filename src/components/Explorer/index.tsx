import { ClosedDir } from "@/assets/ClosedDir";
import "./styles.css";
import { useGetObjectNames } from "@/hooks/useGetObjectNames";
import { useStore } from "@/store";
import { getDirectChildren, getDisplayName, isDir } from "@/utils";
import { FileIcon } from "@/assets/FileIcon";

export const Explorer = () => {
  const objects = useGetObjectNames();
  const { selectedDir } = useStore();
  const directChildren = getDirectChildren(selectedDir, objects);

  return (
    <div id="explorer">
      <h2>{selectedDir ? "root/" + selectedDir : "root/"}</h2>
      <ul>
        {directChildren.map((c) => (
          <li className="explorerItem">
            {isDir(c) ? <ClosedDir /> : <FileIcon />}
            {getDisplayName(c)}
          </li>
        ))}
      </ul>
    </div>
  );
};
