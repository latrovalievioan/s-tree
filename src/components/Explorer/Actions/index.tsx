import { AddFileIcon } from '@/assets/AddFileIcon';
import { Trash } from '@/assets/Trash';
import { AddDir } from './AddDir';

export const Actions = () => {
  return (
    <div id="actionsMenu">
      <AddFileIcon className="action" />
      <AddDir />
      <Trash className="action" />
    </div>
  );
};
