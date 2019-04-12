import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './app/home';
import Index from './app/index';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Index} />
      </Switch>
    );
  }
}

export default App;
