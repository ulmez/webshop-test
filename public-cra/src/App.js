import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
//import logo from './logo.svg';
import OnePage from './OnePage';
import TwoPage from './TwoPage';
import ThreePage from './ThreePage';
import NoMatch from './NoMatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path="/" component={OnePage} />
          <Route exact path="/two" component={TwoPage} />
          <Route exact path="/three" component={ThreePage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
