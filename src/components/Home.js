import React, { Component } from 'react'
import { translate } from 'react-multi-lang'
import { withRouter } from 'react-router'
import toast from './utils/Toast'
import Login from './Login'

import banner from '../styles/images/banner.mp4'


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

              <button onClick={() => toast(<a href="http://www.google.es">www.google.es <span role="img" aria-label="emoji">🦄</span></a>)}>Notify OK!</button>

              <Login />

            </div>
          </div>
        </section>

      </div>
    )
  }

}

export default translate(withRouter(Home))
