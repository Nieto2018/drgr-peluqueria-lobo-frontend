import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'

import {
    RESET_PASSWORD_EMAIL_API_URL,
    LOGIN_URL
} from '../../constants'
import { ListAlert } from '../utils/CustomComponents'


function ResetPasswordEmail(props) {

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    // Email address
    const [email, setEmail] = useState('');

    // It is true when the Rest API to reset email is called without any error
    const [emailSent, setEmailSent] = useState(false);

    // To show any error when the Rest API is called
    const erroDivRef = React.createRef()

    async function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true);

        if (isValidForm) {
            axios.post(RESET_PASSWORD_EMAIL_API_URL, {
                email: email,
            }).then(function (response) {
                if ("Password reset e-mail has been sent." === response.data.detail) {
                    setEmailSent(true);
                } else {
                    let errorMessageList = [props.t('error.AdministratorContact')]
                    ReactDOM.render(
                        <ListAlert variant="danger" messagesList={errorMessageList} />,
                        document.getElementById('errorsResetPasswordEmailDiv')
                    )
                }
            }).catch(function (error) {

                let errorMessageList = []

                if (error.message === 'Network Error') {
                    errorMessageList.push(props.t('error.AdministratorContact'))
                } else {
                    if (null != error.response.data.email) {
                        if ('This field is required.' === error.response.data.email[0]
                            || 'This field may not be blank.' === error.response.data.email[0]) {
                            errorMessageList.push(props.t('error.FieldRequired', { param: props.t('account.Email') }))
                        } else if ('Enter a valid email address.' === error.response.data.email[0]) {
                            errorMessageList.push(props.t('error.EnterValidEmail'))
                        }
                    }
                }

                ReactDOM.render(
                    <ListAlert variant="danger" messagesList={errorMessageList} />,
                    document.getElementById('errorsResetPasswordEmailDiv')
                )
            })
        }
    }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">

                    {!emailSent ?
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <div id="errorsResetPasswordEmailDiv" />

                            <Form ref={formRef} noValidate validated={validated} >

                                <Form.Group controlId="formResetPasswordEmail">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-at" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="email"
                                            placeholder={props.t('account.Email')}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                        <Form.Text className="text-muted">
                                            {props.t('account.PasswordResetEmailExplanation')}
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('account.EmailInvalid')}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <input type="submit" value={props.t('generic.Reset')} className="primary" onClick={_confirm} />
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <a href={LOGIN_URL} style={{ display: 'block', textAlign: 'center' }} >{props.t('link.GoTo', { param: props.t('account.SignIn') })}</a>
                                </Form.Group>
                            </Form>

                        </div>
                        :
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <p>{props.t('account.PasswordResetEmailSent', { param: email })}</p>
                            <a href={LOGIN_URL} style={{ display: 'block', textAlign: 'center' }} >{props.t('link.GoTo', { param: props.t('link.Home') })}</a>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(ResetPasswordEmail)
