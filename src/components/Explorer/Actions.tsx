import { AddDir } from '@/assets/AddDir';
import { AddFileIcon } from '@/assets/AddFileIcon';
import { Trash } from '@/assets/Trash';

export const Actions = () => {
  return (
    <div id="actionsMenu">
      <AddFileIcon className="action" />
      <AddDir className="action" />
      <Trash className="action" />
    </div>
  );
};
