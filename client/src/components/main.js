import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './login.component';
import SignUp from './sign-up.component';
import FindFriends from './findFriends.component';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/find-friends' component={FindFriends}/>
    </Switch>
  </main>
)

export default Main
