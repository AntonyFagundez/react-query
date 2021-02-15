import React from 'react';
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools'

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import Characters from './pages/Characters';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <Characters />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
