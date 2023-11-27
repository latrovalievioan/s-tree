import { ClosedDir } from '@/assets/ClosedDir';
import './styles.css';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, getDisplayName, isDir } from '@/utils';
import { FileIcon } from '@/assets/FileIcon';

export const Explorer = () => {
  const objects = useGetObjectNames();
  const { selectedDir } = useStore();
  const directChildren = getDirectChildren(selectedDir, objects);

  return (
    <div id="explorer">
      <h1>{selectedDir ? 'root/' + selectedDir : 'root/'}</h1>
      <ul>
        {directChildren
          .sort((a, b) => Number(isDir(b)) - Number(isDir(a)))
          .map((c) => (
            <li key={c} className="explorerItem">
              {isDir(c) ? <ClosedDir /> : <FileIcon />}
              {getDisplayName(c)}
            </li>
          ))}
      </ul>
    </div>
  );
};
