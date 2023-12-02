import './styles.css';
import { AddDir } from './AddDir';
import { AddFile } from './AddFile';
import { DeleteObject } from './DeleteObject';

export const Actions = () => {
  return (
    <div className="actionsMenu">
      <AddFile />
      <AddDir />
      <DeleteObject />
    </div>
  );
};
