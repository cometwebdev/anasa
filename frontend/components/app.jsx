import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from '../components/session_forms/login_form_container';
import SignupFormContainer from '../components/session_forms/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Anasa</h1>
      </Link>
    </header>
  <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </Switch>
  </div>
);

export default App;

