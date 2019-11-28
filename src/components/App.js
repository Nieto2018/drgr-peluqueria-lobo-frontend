import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import {
  RESET_PASSWORD_EMAIL_URL,
  RESET_PASSWORD_CONFIRM_URL
 } from '../constants'
import Login from './account/Login'
import ResetPassword from './account/ResetPassword'
import Header from './Header'
// import Home from './Home'
// import AppointmentStatesListPage from './AppointmentStatesListPage'
import Elements from './Elements'
// import Generic from './Generic';
import Footer from './Footer'


import '../styles/assets/css/template.css';
import '../styles/assets/css/app.css';
import '../styles/assets/css/fontawesome.min.css';
import '../styles/assets/css/solid.min.css';


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
          <Route exact path='/account/reset-password' component={ResetPassword} />
          {/* <Route exact path='/generic' component={Generic} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
