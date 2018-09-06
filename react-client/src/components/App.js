import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './header/Header';
import Footer from './footer/Footer';
import NoMatch from './main/pages/NoMatch';
import StartRenderer from './main/renderers/startRenderer/StartRenderer';
import OrderRenderer from './main/renderers/orderRenderer/OrderRenderer';
import RegistrationRenderer from './main/renderers/registrationRenderer/RegistrationRenderer';
import LoginRenderer from './main/renderers/loginRenderer/LoginRenderer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={StartRenderer} />
          <Route exact path="/order" component={OrderRenderer} />
          <Route exact path="/login" component={LoginRenderer} />
          <Route exact path="/registration" component={RegistrationRenderer} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
