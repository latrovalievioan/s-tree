import './styles.css';
import { useAppStore } from '@/store';
import { ExplorerList } from './ExplorerList';
import { isDir } from '@/utils';
import { FileReader } from './FileReader';
import { Navigation } from './Navigation';

export const Explorer = () => {
  const { selectedObject } = useAppStore();

  return (
    <div className="explorer">
      <Navigation />
      {isDir(selectedObject) ? <ExplorerList /> : <FileReader />}
    </div>
  );
};
