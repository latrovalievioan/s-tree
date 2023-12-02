import './styles.css';
import { useStore } from '@/store';
import { Breadcrumbs } from './Breadcrumbs';
import { ExplorerList } from './ExplorerList';
import { isDir } from '@/utils';
import { FileReader } from './FileReader';

export const Explorer = () => {
  const { selectedObject } = useStore();

  return (
    <div className="explorer">
      <Breadcrumbs />
      {isDir(selectedObject) ? <ExplorerList /> : <FileReader />}
    </div>
  );
};
