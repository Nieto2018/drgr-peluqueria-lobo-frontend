import React, { Component } from 'react'
import ReactCountryFlag from "react-country-flag"
import { translate, setLanguage, getLanguage } from 'react-multi-lang'
import { APP_LANGUAGE } from '../../Constants'

class LanguageSelector extends Component {

    changeLang(lang) {
        localStorage.setItem(APP_LANGUAGE, lang)
        setLanguage(lang)
    }

    render() {
        return (
            <div className="language-selector">
                <div onClick={() => this.changeLang('es')}>
                    {getLanguage() === 'es' ? (
                        <ReactCountryFlag code="es" svg />
                    ) : (
                            <ReactCountryFlag code="es" className="inactive-flag" />
                        )
                    }
                </div>
                <div onClick={() => this.changeLang('en')} >
                    {getLanguage() === 'en' ? (
                        <ReactCountryFlag code="gb" svg />
                    ) : (
                            <ReactCountryFlag code="gb" className="inactive-flag" />
                        )
                    }
                </div>
            </div >
        )
    }

}


export default translate(LanguageSelector)