import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, isDir } from '@/utils';
import { Actions } from './Actions';
import { TreeItem } from '../UI/Buttons/TreeItem';

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
            <li>
              <TreeItem
                title={c}
                isSelected={c === selectedObjectForAction}
                isExpanded={false}
                isExpandable={false}
                onClick={() => setSelectedObjectForAction(c)}
                onDoubleClick={() => {
                  setSelectedObject(c);
                  setSelectedObjectForAction('');
                }}
              />
            </li>
          ))}
      </ul>
      <Actions />
    </>
  );
};
