import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session_form/splash';

const App = () => {
  return (
    <div className="app-div">
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        {/* <AuthRoute exact path="/" component={SignupFormContainer} /> */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        {/* maybe take out signup */}
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/greeting" component={GreetingContainer}/>
      </Switch>
    </div>
  )
}

export default App;