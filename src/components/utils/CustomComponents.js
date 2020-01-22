import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import es from 'react-phone-input-2/lang/es.json'
import 'react-phone-input-2/lib/high-res.css'
import React, { useState } from 'react'
import { translate } from 'react-multi-lang'
import ReactPhoneInput from 'react-phone-input-2'
import { isValidPhoneNumber } from 'react-phone-number-input'

import { APP_LANGUAGE } from '../../Constants'


export function ListAlert(props) {
    const header = props.header
    const messagesList = props.messagesList
    const variant = props.variant

    const [show, setShow] = useState(true);

    let elementToRender = null

    if (messagesList.length > 1) {
        let itemsList = messagesList.map((message) => <li>{message}</li>)
        elementToRender = <ul>{itemsList}</ul>
    } else {
        elementToRender = messagesList[0]
    }

    if (show) {
        return (
            <Alert variant={variant} onClose={() => setShow(false)} dismissible>
                {null != header && <Alert.Heading>{header}:</Alert.Heading>}
                {elementToRender}
            </Alert>
        )
    }
}

function LoadingComponent(props) {
    return (
        <div>
            <section id="main" className="wrapper">
                <div className="inner loading">
                    <div className="content">
                        <h2>{props.t('home.HairdressersName')}</h2>
                        <br />
                        <Spinner animation="border" variant="danger" />
                        <h3>{props.t('generic.Loading')}...</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const Loading = translate(LoadingComponent)

function CustomPhoneInputComponent(props) {
    const [phoneNumber, setPhoneNumber] = [props.value, props.onChange]
    const [showPhoneNumberInvalid, setShowPhoneNumberInvalid] = [props.showPhoneNumberInvalid, props.setShowPhoneNumberInvalid]

    return (
        <div className="phone-input-container">
            <ReactPhoneInput
                localization={localStorage.getItem(APP_LANGUAGE) === 'es' ? '' : es}
                inputClass="react-phone-input"
                country="es"
                placeholder={props.t('account.PhoneNumber')}
                value={phoneNumber}
                onChange={
                    (value) => {
                        setPhoneNumber(value)
                        setShowPhoneNumberInvalid(!isValidPhoneNumber(value))
                    }
                }
                isValid={() => { return !showPhoneNumberInvalid }}
            />
            {showPhoneNumberInvalid ?
                <div class="invalid-feedback-visible">
                    {props.t('error.FieldInvalidError', { field_name: props.t('account.PhoneNumber') })}
                </div>
                :
                null
            }
        </div>
    )
}

export const PhoneInput = translate(CustomPhoneInputComponent)