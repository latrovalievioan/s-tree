import './styles.css';

type Props = {
  width: number;
  height: number;
  border: number;
  skin?: 'light' | 'dark';
};

export const Spinner: React.FC<Props> = ({
  width,
  height,
  border,
  skin = 'light',
}) => {
  return (
    <div
      id="spinner"
      className={`${skin}Skin`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${border}px`,
      }}
    />
  );
};
