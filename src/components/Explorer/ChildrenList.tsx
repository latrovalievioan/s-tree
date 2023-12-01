import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useStore } from '@/store';
import { getDirectChildren, isDir } from '@/utils';
import { Actions } from './Actions';
import { ListItem } from '@/components/UI/ListItem';

export const ChildrenList = () => {
  const { data } = useGetObjectNames();
  const {
    selectedObject,
    setSelectedObject,
    selectedObjectForAction,
    setSelectedObjectForAction,
  } = useStore();
  const directChildren = getDirectChildren(selectedObject, data || []);

  return (
    <>
      <ul id="explorerItemList">
        {directChildren
          .sort((a, b) => Number(isDir(b)) - Number(isDir(a)))
          .map((c) => (
            <li key={c}>
              <ListItem
                title={c}
                isSelected={c === selectedObjectForAction}
                isExpanded={false}
                isExpandable={false}
                isFromTree={false}
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
