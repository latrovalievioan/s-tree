import { Back } from '@/assets/Back';
import './styles.css';
import { IconButton } from '@/components/UI/Buttons/IconButton';
import { useAppStore, useClientStore } from '@/store';
import { getDisplayName, getParentDir } from '@/utils';

export const Navigation = () => {
  const { selectedObject, setSelectedObject } = useAppStore();
  const { bucket } = useClientStore();
  const parentDir = getParentDir(selectedObject);

  return (
    <div className="navigation">
      <IconButton
        icon={<Back />}
        title={`Up to ${parentDir || bucket}`}
        onClick={() => setSelectedObject(parentDir)}
        disabled={selectedObject === ''}
      />
      <h1>{getDisplayName(selectedObject, bucket)}</h1>
    </div>
  );
};
