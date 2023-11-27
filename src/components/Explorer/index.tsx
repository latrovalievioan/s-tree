import { ClosedDir } from '@/assets/ClosedDir';
import './styles.css';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, getDisplayName, isDir } from '@/utils';
import { FileIcon } from '@/assets/FileIcon';
import { Breadcrumbs } from './Breadcrumbs';
import { useGetObject } from '@/hooks/useGetObject';

export const Explorer = () => {
  const objects = useGetObjectNames();
  const { selectedObject, setSelectedObject } = useStore();
  const directChildren = getDirectChildren(selectedObject, objects);
  const objectContent = useGetObject(selectedObject);

  return (
    <div id="explorer">
      <Breadcrumbs />
      <ul>
        {directChildren
          .sort((a, b) => Number(isDir(b)) - Number(isDir(a)))
          .map((c) => (
            <li
              key={c}
              onDoubleClick={() => setSelectedObject(c)}
              className="explorerItem"
            >
              {isDir(c) ? <ClosedDir /> : <FileIcon />}
              {getDisplayName(c)}
            </li>
          ))}
      </ul>
    </div>
  );
};
