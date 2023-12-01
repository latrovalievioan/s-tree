import './styles.css';
import { DirTree } from './components/DirTree';
import { Explorer } from './components/Explorer';
import { Credentials } from './components/Credentials';
import { useClientStore } from './store';
import { useEffect, useState } from 'react';
import { initializeClientFromStorage } from './utils';
import { useGetObjectNames } from './hooks/useGetObjectNames';
import { GlobalSpinner } from './components/UI/Spinner/GlobalSpinner';

function App() {
  const { client, setClient, setBucket } = useClientStore();
  const [showForm, setShowForm] = useState(false);
  const { isPending } = useGetObjectNames();

  useEffect(() => {
    initializeClientFromStorage().then(({ client, bucket }) => {
      if (!client || !bucket) return setShowForm(true);
      setClient(client);
      setBucket(bucket);
    });
  }, []);

  if (isPending && client) return <GlobalSpinner />;

  return (
    <>
      {client && (
        <>
          <DirTree />
          <Explorer />
        </>
      )}
      {showForm && !client && <Credentials />}
    </>
  );
}

export default App;
