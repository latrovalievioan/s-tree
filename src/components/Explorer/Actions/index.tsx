import { Trash } from '@/assets/Trash';
import { AddDir } from './AddDir';
import { AddFile } from './AddFile';

export const Actions = () => {
  return (
    <div id="actionsMenu">
      <AddFile />
      <AddDir />
      <Trash className="action" />
    </div>
  );
};
