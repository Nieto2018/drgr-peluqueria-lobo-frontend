import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'
import { commitMutation, graphql } from 'react-relay'
import { Link } from "react-router-dom"

import { LOG_IN_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import environment from '../../Environment'


const mutation = graphql`
    mutation ResetPasswordEmailMutation($email: String, $action: AccountActionEnum) {
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

                            if (data.sendVerificationEmail.errors.length > 0) {
                                data.sendVerificationEmail.errors.forEach(error => {
                                    console.error(error)

                                    if ('EmailRequiredError' === error) {
                                        errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Email') }))
                                    } else if ('AccountDoesNotExistError' === error) {
                                        errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
                                    } else {
                                        errorMessageList.push(props.t('error.AdministratorContact'))
                                    }
                                })

                            } else {

                                if ("OK" === data.sendVerificationEmail.result) {
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
                        console.log(err)
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

                            <Form className="form-center" ref={formRef} noValidate validated={validated} >

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
                                            {props.t('account.error.EnterValidEmailError')}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <input type="submit" value={props.t('generic.Reset')} className="primary" onClick={_confirm} />
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <Link to={LOG_IN_URL} >{props.t('link.GoTo', { param: props.t('account.SignIn') })}</Link>
                                </Form.Group>
                            </Form>

                        </div>
                        :
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <p>{props.t('account.PasswordResetEmailSent', { param: email })}</p>
                            <Link to={LOG_IN_URL} >{props.t('link.GoTo', { param: props.t('link.Home') })}</Link>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(ResetPasswordEmail)
