import React from 'react'
import { translate } from 'react-multi-lang'
import { withRouter } from 'react-router'
// import toast from './utils/Toast'

// import banner from '../styles/images/banner.mp4'


function PageNotFound(props) {

    return (
      <div>

        <section id="main" className="wrapper">
          <div className="inner">
            <div className="content">
              {/* TODO */}
              Error 404: Page not found
            </div>
          </div>
        </section>

      </div>
    )

}

export default translate(withRouter(PageNotFound))
