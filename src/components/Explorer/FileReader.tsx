import { useGetObject } from '@/hooks/useGetObject';
import { useStore } from '@/store';

export const FileReader = () => {
  const { selectedObject } = useStore();
  const content = useGetObject(selectedObject);

  if (!content) return <div>LOADING TODO</div>;

  return <pre id="fileReader">{content}</pre>;
};
