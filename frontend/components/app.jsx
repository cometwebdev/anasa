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
import PageNotFoundContainer from '../components/splash_and_404/page_not_found_container'
import SplashContainer from '../components/splash_and_404/splash_container';


const App = () => (
  <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* Splash Page */}
      <AuthRoute exact path="/" component={SplashContainer} />
      {/* 404 Not Found Page*/}
      <AuthRoute component={PageNotFoundContainer} />
  </Switch>
);

export default App;

