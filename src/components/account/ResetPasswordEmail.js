import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'

import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'
import {
    RESET_PASSWORD_EMAIL_API_URL,
    LOGIN_URL
} from '../../constants'
import { ListAlert } from '../utils/CustomComponents'
import { forEach } from 'iterall';


const mutation = graphql`
    mutation ResetPasswordEmailQuery($email: String, $action: UserActionEnum) {
        sendVerificationEmail(email: $email, action: $action) {
            email
            action
            result
            errors
        }
    }
`


function ResetPasswordEmail(props) {

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    // Email address
    const [email, setEmail] = useState('');

    // It is true when the Rest API to reset email is called without any error
    const [emailSent, setEmailSent] = useState(false);

    async function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true)

        if (isValidForm) {

            const variables = {
                email: email,
                action: "RESET_PASSWORD"
            }

            commitMutation(
                environment,
                {
                    mutation,
                    variables,
                    onCompleted: data => {
                        let errorMessageList = []

                        if (null != data.sendVerificationEmail) {

                            if (data.sendVerificationEmail.errors && data.sendVerificationEmail.errors.length > 0) {
                                data.sendVerificationEmail.errors.forEach(error => {
                                    if ('EmailRequired' === error) {
                                        errorMessageList.push(props.t('error.FieldRequired', { param: props.t('account.Email') }))
                                    } else if ('UserDoesNotExist' === error) {
                                        errorMessageList.push(props.t('error.backendError.EnterValidEmailError'))
                                    }
                                })

                            } else {

                                if ("EmailSent" === data.sendVerificationEmail.result) {
                                    setEmailSent(true);
                                } else {
                                    errorMessageList.push(props.t('error.AdministratorContact'))
                                }

                            }
                        } else {
                            errorMessageList.push(props.t('error.AdministratorContact'))
                        }

                        if (errorMessageList.length > 0) {
                            ReactDOM.render(
                                <ListAlert variant="danger" messagesList={errorMessageList} />,
                                document.getElementById('errorsResetPasswordEmailDiv'))
                        }
                    },
                    onError: err => {
                        let errorMessageList = [props.t('error.AdministratorContact')]
                        ReactDOM.render(
                            <ListAlert variant="danger" messagesList={errorMessageList} />,
                            document.getElementById('errorsResetPasswordEmailDiv')
                        )
                    },
                },
            )

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
                                            {props.t('account.error.EmailInvalidError')}
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
