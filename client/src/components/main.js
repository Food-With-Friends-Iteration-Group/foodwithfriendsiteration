import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./login.component";
import SignUp from "./sign-up.component";
import FindFriends from "./findFriends.component";
import ChatBox from "./chatBox.component";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/find-friends" component={FindFriends} />
      <Route path="/chat-box" component={ChatBox} />
    </Switch>
  </main>
);

export default Main;
