import { useStore } from '@/store';

export const Breadcrumbs = () => {
  const { selectedDir, setSelectedDir } = useStore();

  const split = ['root', ...selectedDir.split('/')];

  const handleClick = (i: number) => {
    setSelectedDir(
      split
        .slice(0, i + 1)
        .filter((s) => s !== 'root')
        .join('/') + '/'
    );
  };

  return (
    <h1>
      {split.map(
        (s, i) =>
          s && (
            <span
              key={`${s}${i}`}
              onClick={() => handleClick(i)}
              className="breadcrumb"
            >
              {s + '/'}
            </span>
          )
      )}
    </h1>
  );
};
