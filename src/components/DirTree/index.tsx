import { Tree } from './Tree';
import './styles.css';
import { useRef, useState } from 'react';

export const DirTree = () => {
  const [width, setWidth] = useState(300);
  const borderRef = useRef<HTMLDivElement>(null);

  const onMouseDown = () => {
    const onMouseMove = (event: MouseEvent) => {
      setWidth((width) => width + event.movementX);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div id="dirTree" style={{ width }}>
      <Tree />
      <div id="resizeBorder" ref={borderRef} onMouseDown={onMouseDown} />
    </div>
  );
};
