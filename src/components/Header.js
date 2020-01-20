import Image from 'react-bootstrap/Image'
import React from 'react'
import { withRouter } from 'react-router'
import { useHistory } from "react-router-dom"

import { HOME_URL } from '../Constants'
import LanguageSelector from './utils/LanguageSelector'
import LoboLogo from '../styles/images/Lobo-logo.jpg'
import UserInfo from './account/UserInfo'

function Header(props) {
    let history = useHistory()

    return (
        <div>
            {/* <!-- Header --> */}
            <header id="header" className="header">
                <div className="logo-url" onClick={() => history.push(HOME_URL)}>
                    <Image className="logo-image" alt="Lobo-lobo" src={LoboLogo} roundedCircle />
                    <p className="logo-name">Peluquería Lobo</p>
                </div>

                {/* <!-- Language settings --> */}
                <LanguageSelector />

                {/* <!-- Menu --> */}
                <UserInfo />

            </header >

        </div >
    )

}


export default withRouter(Header)