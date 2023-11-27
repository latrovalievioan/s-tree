import { useStore } from '@/store';

const getBreadcrumbs = (s: string) => {
  let accString = '';
  const breadcrubsItems: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    accString += currentChar;

    if (currentChar === '/' || i === s.length - 1)
      breadcrubsItems.push(accString);

    if (currentChar === '/') accString = '';
  }

  return breadcrubsItems;
};

export const Breadcrumbs = () => {
  const { selectedObject, setSelectedObject } = useStore();

  const breadcrumbs = getBreadcrumbs(selectedObject);

  const handleClick = (i: number) => {
    setSelectedObject(breadcrumbs.slice(0, i + 1).join(''));
  };

  return (
    <h1>
      {breadcrumbs.map((crumb, i) => (
        <span
          key={crumb + i}
          className="breadcrumb"
          onClick={() => handleClick(i)}
        >
          {crumb}
        </span>
      ))}
    </h1>
  );
};
