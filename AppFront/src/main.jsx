import { QueryClientProvider, QueryClient } from 'react-query';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
