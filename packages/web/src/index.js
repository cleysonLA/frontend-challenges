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
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={api}>
        <App>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product/:productId" component={Product} />
                </Switch>
            </Router>
        </App>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
