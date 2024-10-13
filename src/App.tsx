import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = memo(() => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
));

App.displayName = 'App';

export default App;
