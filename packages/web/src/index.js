import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import api from './services/api';

import App from './components/App';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={api}>
        <App>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </App>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
