import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
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
