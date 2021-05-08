import React from 'react';
import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Switch, Route } from 'react-router-dom';

import Characters from './pages/Characters';

const queryClient = new QueryClient({
  defaultOptions: { 
    queries: { 
      refetchOnWindowFocus: false 
    } 
  },
});

function App() {
  return (
    <Switch>
      <QueryClientProvider client={queryClient}>
        <Route strict exact path="/StarWars" component={Characters} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Switch>
  );
}

export default App;
