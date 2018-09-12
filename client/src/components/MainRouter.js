import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Chat from './Chat';

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LogIn} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/chat' component={Chat} />
    </Switch>
  </main>
)

export default MainRouter
