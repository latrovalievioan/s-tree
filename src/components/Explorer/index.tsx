import './styles.css';
import { useStore } from '@/store';
import { Breadcrumbs } from './Breadcrumbs';
import { ChildrenList } from './ChildrenList';

export const Explorer = () => {
  const { selectedObject } = useStore();

  return (
    <div id="explorer">
      <Breadcrumbs />
      <ChildrenList />
    </div>
  );
};
