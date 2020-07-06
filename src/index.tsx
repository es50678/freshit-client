import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import { App } from './components';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000',
  headers: {
    authorization: localStorage.getItem('token')
  }
});

const client = new ApolloClient<NormalizedCacheObject>({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
