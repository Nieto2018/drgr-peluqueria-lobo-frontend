import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import AppointmentStatesListPage from './AppointmentStatesListPage'
import ActivateAccount from './account/ActivateAccount'
import {
  ACTIVATE_ACCOUNT_URL,
  EDIT_ACCOUNT_URL,
  HOME_URL,
  LOG_IN_URL,
  SIGN_UP_URL,
  RESET_PASSWORD_EMAIL_URL,
  RESET_PASSWORD_CONFIRM_URL,
  UPDATE_EMAIL_URL
} from '../Constants'
import { Loading } from './utils/CustomComponents'
import EditAccount from './account/EditAccount'
import Elements from './Elements'
import Footer from './Footer'
import Generic from './Generic';
import Header from './Header'
import Home from './Home'
import LogIn from './account/LogIn'
import PageNotFound from './PageNotFound'
import Protected from './Protected'
import ResetPasswordConfirm from './account/ResetPasswordConfirm'
import ResetPasswordEmail from './account/ResetPasswordEmail'
import Session, { LogInRoute, PrivateRoute } from './account/Session'
import SignUp from './account/SignUp'
import UpdateEmail from './account/UpdateEmail'
import '../styles/assets/css/app.css';
import '../styles/assets/css/fontawesome.min.css';
import '../styles/assets/css/solid.min.css';
import '../styles/assets/css/template.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenVerified: false
    };
  }

  componentDidMount() {
    Session.verifyToken(() => {
      this.setState({ tokenVerified: true })
    })
  }

  render() {
    if (this.state.tokenVerified) {
      return (
        <div>
          <Header />
          <Switch>
            {/* <Route exact path={HOME_URL} component={Home} /> */}
            {/* <Route exact path='/' component={AppointmentStatesListPage} /> */}
            <Route exact path='/aslp' component={AppointmentStatesListPage} />
            <Route exact path='/elements' component={Elements} />
            <Route exact path='/generic' component={Generic} />
            
            {/* Account URLs */}
            <Route exact path={ACTIVATE_ACCOUNT_URL} component={ActivateAccount} />
            <Route exact path={HOME_URL} component={EditAccount} />
            <PrivateRoute exact path={EDIT_ACCOUNT_URL}>
              <EditAccount />
            </PrivateRoute>
            <LogInRoute exact path={LOG_IN_URL}>
              <LogIn />
            </LogInRoute>
            <Route exact path={RESET_PASSWORD_EMAIL_URL} component={ResetPasswordEmail} />
            <Route exact path={RESET_PASSWORD_CONFIRM_URL} component={ResetPasswordConfirm} />
            <Route exact path={SIGN_UP_URL} component={SignUp} />
            <PrivateRoute exact path="/protected">
              <Protected />
            </PrivateRoute>
            <Route exact path={UPDATE_EMAIL_URL} component={UpdateEmail} />

            {/* PageNotFound must be the last (Default URL) */}
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      )
    } else {
      return (<Loading />)
    }
  }

}

export default App;
