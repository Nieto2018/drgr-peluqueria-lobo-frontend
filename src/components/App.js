import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import AppointmentStatesListPage from './AppointmentStatesListPage'
import Elements from './Elements'
import Generic from './Generic';
import Footer from './Footer'

import Login from './Login'

import '../styles/assets/css/template.css';
import '../styles/assets/css/app.css';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/' component={Login} />
          {/* <Route exact path='/aslp' component={AppointmentStatesListPage} /> */}
          <Route exact path='/elements' component={Elements} />
          {/* <Route exact path='/generic' component={Generic} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
