import './Breadcrumbs.css';
import { useClientStore, useAppStore } from '@/store';
import { generateBreadcrumbs } from '@/utils';

export const Breadcrumbs = () => {
  const { selectedObject, setSelectedObject } = useAppStore();
  const { bucket } = useClientStore();

  const breadcrumbs = generateBreadcrumbs(selectedObject);

  const handleClick = (i: number) => {
    setSelectedObject(breadcrumbs.slice(0, i + 1).join(''));
  };

  return (
    <h1 className="breadcrumbs">
      {
        <button className="breadcrumb" onClick={() => setSelectedObject('')}>
          s3://{bucket}/
        </button>
      }
      {breadcrumbs.map((crumb, i) => (
        <button
          key={crumb + i}
          className="breadcrumb"
          onClick={() => handleClick(i)}
        >
          {crumb}
        </button>
      ))}
    </h1>
  );
};
