import Image from 'react-bootstrap/Image'
import React from 'react'
import { withRouter } from 'react-router'
import { useHistory } from "react-router-dom"

import { HOME_URL } from '../Constants'
import LanguageSelector from './utils/LanguageSelector'
import UserInfo from './account/UserInfo'
import wolf from '../styles/images/wolf.png'

function Header(props) {
    let history = useHistory()

    return (
        <div>
            {/* <!-- Header --> */}
            <header id="header" className="header">
                <div className="logo-url" onClick={() => history.push(HOME_URL)}>
                    <Image className="logo-image" src={wolf}
                        alt='Icons made by https://www.flaticon.com/authors/freepik from https://www.flaticon.es' />
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