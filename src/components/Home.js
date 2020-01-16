import React, { Component } from 'react'
import { translate } from 'react-multi-lang'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom"
import toast from './utils/Toast'
// import LogIn from './account/LogIn'

import banner from '../styles/images/banner.mp4'

import {
  LOG_IN_URL
} from '../Constants'


class Home extends Component {

  render() {
    return (
      <div>

        <section id="banner">
          <div className="inner">
            <h1>Peluquería Lobo</h1>
            <p>A responsive business oriented template with a video background<br />
              designed by <a href="https://templated.co/">TEMPLATED</a> and released under the Creative Commons License.</p>
          </div>
          <video autoPlay loop muted playsInline src={banner} ></video>
        </section>

        <section id="main" className="wrapper">
          <div className="inner">
            <div className="content">
              {/* CONTENT */}

              {this.props.t('home.Title', { param: 'react' })}
              <br />
              <button onClick={() => toast(<a href="http://www.google.es">www.google.es <span role="img" aria-label="emoji">🦄</span></a>)}>Notify OK!</button>
              <br />

              {/* <LogIn /> */}
              <Link to={LOG_IN_URL} >Log In</Link>
              <br />
              <Link to='/Protected' >Protected</Link>

            </div>
          </div>
        </section>

      </div>
    )
  }

}

export default translate(withRouter(Home))
