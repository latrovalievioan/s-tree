import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DirTree } from './components/DirTree';
import { Explorer } from './components/Explorer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DirTree />
      <Explorer />
    </QueryClientProvider>
  );
}

export default App;
