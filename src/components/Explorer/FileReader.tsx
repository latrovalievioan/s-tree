import { useGetObject } from '@/hooks/useGetObject';
import { useStore } from '@/store';
import { GlobalSpinner } from '../UI/Spinner/GlobalSpinner';

export const FileReader = () => {
  const { selectedObject } = useStore();
  const { data, isPending } = useGetObject(selectedObject);

  if (isPending) return <GlobalSpinner />;

  return <pre id="fileReader">{data}</pre>;
};
