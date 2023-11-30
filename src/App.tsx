import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DirTree } from './components/DirTree';
import { Explorer } from './components/Explorer';
import { Credentials } from './components/Credentials';
import { useClientStore } from './store';
import { useEffect, useState } from 'react';
import { initializeClientFromStorage } from './utils';

const queryClient = new QueryClient();

function App() {
  const { client, setClient, setBucket } = useClientStore();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    initializeClientFromStorage().then(({ client, bucket }) => {
      if (!client || !bucket) return setShowForm(true);
      setClient(client);
      setBucket(bucket);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {client && (
        <>
          <DirTree />
          <Explorer />
        </>
      )}
      {showForm && <Credentials />}
    </QueryClientProvider>
  );
}

export default App;
