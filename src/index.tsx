import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { onError } from '@apollo/link-error';

import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './App';

import AuthProvider, { getToken, logoutUser } from './commons/auth/provider';

const token = getToken();

// const link = ApolloLink.from([
//   onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors) {
//       graphQLErrors.forEach(({ message, locations, path }) => {
//         const errMsg = `[GraphQL error]: Message: ${message}, location: ${locations}, path: ${path} `;
//         console.error(errMsg);
//       });
//     }
//     if ((networkError as any)?.statusCode === 403) {
//       // The server says we're forbibbed - unauthorized. We should logout
//       logoutUser();
//     }
//   }),
//   setContext((_, { headers }) => {
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : null,
//       },
//     };
//   }),
//   createHttpLink({
//     uri: process.env.REACT_APP_SERVER_URI,
//   }),
// ]);

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
      <Router history={history}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
