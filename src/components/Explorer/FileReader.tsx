import { useGetObject } from '@/hooks/useGetObject';
import { useStore } from '@/store';
import { GlobalSpinner } from '../UI/Spinner/GlobalSpinner';
import { ErrorModal } from '../UI/ErrorModal';

export const FileReader = () => {
  const { selectedObject } = useStore();
  const { data, isPending, error } = useGetObject(selectedObject);

  if (isPending) return <GlobalSpinner />;

  if (error) return <ErrorModal />;

  return <pre id="fileReader">{data}</pre>;
};
