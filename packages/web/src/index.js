import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from '@apollo/client';
import api from './services/api';

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={api}>
        <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
