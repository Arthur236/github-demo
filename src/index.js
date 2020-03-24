import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import App from './components/App/App';
import SearchContextProvider from './contexts/SearchContext';

import './index.css';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({
  headers: {authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`},
  uri: 'https://api.github.com/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchContextProvider>
        <App/>
      </SearchContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
