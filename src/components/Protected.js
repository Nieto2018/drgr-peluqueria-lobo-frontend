import React from 'react'
import { translate } from 'react-multi-lang'
import { withRouter } from 'react-router'


function Protected(props) {

  return (
    <div>

      <section id="main" className="wrapper">
        <div className="inner">
          <div className="content">
            Protected page
            </div>
        </div>
      </section>

    </div>
  )

}

export default translate(withRouter(Protected))
