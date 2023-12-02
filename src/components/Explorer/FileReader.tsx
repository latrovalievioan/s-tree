import './FileReader.css';
import { useGetObject } from '@/hooks/useGetObject';
import { useAppStore } from '@/store';
import { GlobalSpinner } from '@/components/UI/Spinner/GlobalSpinner';
import { ErrorModal } from '@/components/UI/ErrorModal';

export const FileReader = () => {
  const { selectedObject } = useAppStore();
  const { data, isPending, error } = useGetObject(selectedObject);

  if (isPending) return <GlobalSpinner />;

  if (error) return <ErrorModal />;

  return <pre className="fileReader">{data}</pre>;
};
