import './styles.css';

type Props = {
  width: number;
  height: number;
  border: number;
};

export const Spinner: React.FC<Props> = ({ width, height, border }) => {
  return (
    <div
      id="spinner"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: `${border}px`,
      }}
    />
  );
};
