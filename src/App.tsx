import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';

import ErrorBoundary from './commons/boundary/error';
import SuspenseBoundary from './commons/boundary/suspense';

const Login = lazy(() => import('./pages/login'));
const ForgotPassword = lazy(() => import('./pages/forgot-password'));
const Admin = lazy(() => import('./pages/Admin/admin'));
const AddKeyword = lazy(() => import('./pages/AdminKeywords'));
const AllKeywords = lazy(() => import('./pages/Admin/all-keywords'));
const AllUsers = lazy(() => import('./pages/Admin/all-users'));

function App() {
  return (
    <ErrorBoundary>
      <Switch>
        <SuspenseBoundary>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/forgot-password" exact>
              <ForgotPassword />
            </Route>
            <AuthComponent>
              <Route path="/admin" exact>
                <Admin />
              </Route>
              <Route path="/admin/all-keywords" exact>
                <AllKeywords />
              </Route>
              <Route path="/admin/all-users" exact>
                <AllUsers />
              </Route>
              <Route path="/admin/addkeywords" exact>
                <AddKeyword />
              </Route>
            </AuthComponent>
        </SuspenseBoundary>
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
