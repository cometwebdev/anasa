import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from '../components/session_forms/login_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Anasa</h1>
      </Link>
    </header>
  <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      {//<AuthRoute exact path="/signup" component={SignUpFormContainer} />
      }
  </Switch>
  </div>
);

export default App;

