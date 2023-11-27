import './styles.css';
import { useStore } from '@/store';
import { Breadcrumbs } from './Breadcrumbs';
import { ChildrenList } from './ChildrenList';
import { isDir } from '@/utils';
import { FileReader } from './FileReader';

export const Explorer = () => {
  const { selectedObject } = useStore();

  return (
    <div id="explorer">
      <Breadcrumbs />
      {isDir(selectedObject) ? <ChildrenList /> : <FileReader />}
    </div>
  );
};
