import { Trash } from '@/assets/Trash';
import { AddDir } from './AddDir';
import { AddFile } from './AddFile';
import { DeleteObject } from './DeleteObject';

export const Actions = () => {
  return (
    <div id="actionsMenu">
      <AddFile />
      <AddDir />
      <DeleteObject />
    </div>
  );
};
