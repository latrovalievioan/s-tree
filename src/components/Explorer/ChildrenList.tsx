import { ClosedDir } from '@/assets/ClosedDir';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, getDisplayName, isDir } from '@/utils';
import { FileIcon } from '@/assets/FileIcon';
import { Actions } from './Actions';

export const ChildrenList = () => {
  const objects = useGetObjectNames();
  const {
    selectedObject,
    setSelectedObject,
    selectedObjectForAction,
    setSelectedObjectForAction,
  } = useStore();
  const directChildren = getDirectChildren(selectedObject, objects);

  return (
    <>
      <ul id="explorerItemList">
        {directChildren
          .sort((a, b) => Number(isDir(b)) - Number(isDir(a)))
          .map((c) => (
            <li
              key={c}
              className={`explorerItem ${
                c === selectedObjectForAction ? 'selected' : ''
              }`}
              onClick={() => {
                setSelectedObjectForAction(c);
              }}
              onDoubleClick={() => {
                setSelectedObject(c);
                setSelectedObjectForAction('');
              }}
            >
              {isDir(c) ? <ClosedDir /> : <FileIcon />}
              {getDisplayName(c)}
            </li>
          ))}
      </ul>
      <Actions />
    </>
  );
};
