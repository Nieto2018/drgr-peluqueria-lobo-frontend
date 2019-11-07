import React, { Component } from 'react'
import ReactCountryFlag from "react-country-flag"
import { translate, setLanguage, getLanguage } from 'react-multi-lang'
import { APP_LANGUAGE } from '../../constants'

class LanguageSelector extends Component {

    changeLang(lang) {
        localStorage.setItem(APP_LANGUAGE, lang)
        setLanguage(lang)
    }

    render() {
        return (
            <div>
                <div style={{float: 'left', marginRight: '10px'}} onClick={() => this.changeLang('es')}>
                    {getLanguage() === 'es' ? (
                        <ReactCountryFlag code="es" svg />
                    ) : (
                            <ReactCountryFlag code="es" />
                        )}
                </div>
                <div style={{float: 'right', marginRight: '10px'}} onClick={() => this.changeLang('en')} >
                    {getLanguage() === 'en' ? (
                        <ReactCountryFlag code="gb" svg />
                    ) : (
                        <ReactCountryFlag code="gb" />
                    )}
                </div>
            </div >
        )
    }

}


export default translate(LanguageSelector)