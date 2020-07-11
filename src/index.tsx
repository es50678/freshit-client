import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorker from './serviceWorker';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { Routes } from './routes';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000'
});
// sets authorization header on every request
// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, { headers }) => {
  const token= localStorage.getItem('authorization_token');

  return {
    headers: {
      ...headers,
      authorization: token
    }
  }
});

const client = new ApolloClient<NormalizedCacheObject>({
  cache,
  link: authLink.concat(link)
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <div className="container-fluid vh-100">
      <Routes />
    </div>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
