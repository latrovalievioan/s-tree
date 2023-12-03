import './styles.css';
import { useGetObjectNames } from '@/hooks/useGetObjectNames';
import { useAppStore, useClientStore } from '@/store';
import { getDirectChildren, getParentsOf, isDir } from '@/utils';
import { Actions } from './Actions';
import { ListItem } from '@/components/UI/ListItem';

export const ExplorerList = () => {
  const { data } = useGetObjectNames();
  const {
    selectedObject,
    setSelectedObject,
    selectedObjectForAction,
    setSelectedObjectForAction,
    toggleExpandedDir,
  } = useAppStore();
  const directChildren = getDirectChildren(selectedObject, data || []);
  const { data: keys } = useGetObjectNames();
  const { bucket } = useClientStore();

  const selectObject = (key: string) => {
    setSelectedObject(key);
    // The current working directory should always be visible in the tree view
    // If we select the directory from the Explorer,
    // we expand the parents in the tree, so that it is visible
    const parentDirs = getParentsOf(keys || [], key);
    parentDirs.forEach((p) => toggleExpandedDir(p));
  };

  return (
    <>
      <ul className="explorerList">
        {directChildren
          .sort((a, b) => Number(isDir(b)) - Number(isDir(a)))
          .map((c) => (
            <li key={c}>
              <ListItem
                title={c}
                bucket={bucket}
                isSelected={c === selectedObjectForAction}
                isExpanded={false}
                isExpandable={false}
                isFromTree={false}
                onClick={() => setSelectedObjectForAction(c)}
                onDoubleClick={() => {
                  selectObject(c);
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
