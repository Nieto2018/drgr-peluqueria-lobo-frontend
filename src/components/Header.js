import React, { Component } from 'react'
import { withRouter } from 'react-router'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import LanguageSelector from './utils/LanguageSelector'

import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {

    render() {

        return (
            <div>
                {/* <!-- Header --> */}
                <header id="header">
                    <a className="logo" href="/">Peluquería Lobo</a>

                    <div>
                        {/* <!-- Language settings --> */}
                        <div style={{ float: 'left' }} >
                            <LanguageSelector />
                        </div>
                        {/* <!-- Menu --> */}
                        <div style={{ float: 'right' }} >
                            <DropdownButton
                                alignRight
                                title="Menú"
                                id="dropdown-menu-header"
                                variant="dark" >
                                {/* TODO */}
                                <Dropdown.Item href="/">Inicio</Dropdown.Item>
                                <Dropdown.Item href="/aslp">Administración</Dropdown.Item>
                                <Dropdown.Item href="/elements">Elementos</Dropdown.Item>
                                <Dropdown.Item href="/generic">Genérico</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </header >

            </div >
        )
    }

}


export default withRouter(Header)