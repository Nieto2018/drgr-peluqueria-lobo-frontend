import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// import AppointmentStatesListPage from './AppointmentStatesListPage'
import {
  LOG_IN_URL,
  SIGN_UP_URL,
  RESET_PASSWORD_EMAIL_URL,
  RESET_PASSWORD_CONFIRM_URL
 } from '../Constants'
import LogIn from './account/LogIn'
import ResetPasswordConfirm from './account/ResetPasswordConfirm'
import ResetPasswordEmail from './account/ResetPasswordEmail'
import Elements from './Elements'
import Footer from './Footer'
import Generic from './Generic';
import Header from './Header'
// import Home from './Home'
import PageNotFound from './PageNotFound'
import SignUp from './account/SignUp'


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
          {/* <Route exact path='/' component={AppointmentStatesListPage} /> */}
          {/* <Route exact path='/aslp' component={AppointmentStatesListPage} /> */}
          <Route exact path='/elements' component={Elements} />
          <Route exact path='/generic' component={Generic} />
          <Route exact path="/" component={LogIn} />
          {/* <Route exact path={LOG_IN_URL} component={LogIn} /> */}
          {/* <Route exact path={SIGN_UP_URL} component={SignUp} /> */}
          {/* <Route exact path="/" component={ResetPasswordEmail} /> */}
          <Route exact path={RESET_PASSWORD_EMAIL_URL} component={ResetPasswordEmail} />
          <Route exact path={RESET_PASSWORD_CONFIRM_URL} component={ResetPasswordConfirm} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
