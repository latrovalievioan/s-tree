import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DirTree } from './components/DirTree';
import { Explorer } from './components/Explorer';
import { Credentials } from './components/Credentials';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DirTree />
      <Explorer />
      <Credentials />
    </QueryClientProvider>
  );
}

export default App;
