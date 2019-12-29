import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'
import { commitMutation, graphql } from 'react-relay'
import queryString from 'query-string'

import { HOME_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import environment from '../../Environment'

const mutation = graphql`
    mutation ResetPasswordConfirmMutation($token: String, $password1: String, $password2: String) {
        resetPassword(token: $token, password1: $password1, password2: $password2){
            email
            result
            errors
        }
    }
`

function ResetPasswordConfirm(props) {

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false)

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // It is true when the Rest API to reset email is called without any error
    const [passwordChanged, setPasswordChanged] = useState(false)

    async function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true);

        if (isValidForm) {

            const url = props.location.search
            const params = queryString.parse(url)

            const token = params["token"]

            const variables = {
                token: token,
                password1: password1,
                password2: password2
            }

            commitMutation(
                environment,
                {
                    mutation,
                    variables,
                    onCompleted: data => {
                        let errorMessageList = []

                        if (null != data.resetPassword) {

                            if (data.resetPassword.errors.length > 0) {
                                data.resetPassword.errors.forEach(error => {
                                    console.error(error)

                                    if ('TokenRequiredError' === error) {
                                        errorMessageList.push(props.t('error.TokenNotFoundError'))
                                    } else if ('ExpiredTokenError' === error) {
                                        errorMessageList.push(props.t('error.TokenExpiredError'))
                                    } else if ('TokenNotMatchError' === error) {
                                        errorMessageList.push(props.t('error.TokenNotMatchError'))
                                    } else if ('TokenUsedError' === error) {
                                        errorMessageList.push(props.t('error.TokenUsedError'))
                                    } else if ('TokenError' === error) {
                                        errorMessageList.push(props.t('error.InvalidToken'))
                                    } else if ('Password1RequiredError' === error) {
                                        errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword1') }))
                                    } else if ('Password2RequiredError' === error) {
                                        errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword2') }))
                                    } else if ('PasswordsNotMatchError' === error) {
                                        errorMessageList.push(props.t('account.backendError.PasswordsNotMatchError'))
                                    } else if ('PasswordRegexError' === error) {
                                        errorMessageList.push(props.t('account.backendError.PasswordRegexError'))
                                    } else if ('UserDoesNotExistError' === error) {
                                        errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
                                    } else if ('UserInactiveError' === error) {
                                        errorMessageList.push(props.t('account.backendError.UserInactiveError'))
                                    } else {
                                        errorMessageList.push(props.t('error.AdministratorContact'))
                                    }
                                })

                            } else {

                                if ("OK" === data.resetPassword.result) {
                                    setPasswordChanged(true);
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
                                document.getElementById('errorsResetPasswordConfirmDiv'))
                        }
                    },
                    onError: err => {
                        console.log(err)
                        let errorMessageList = [props.t('error.AdministratorContact')]
                        ReactDOM.render(
                            <ListAlert variant="danger" messagesList={errorMessageList} />,
                            document.getElementById('errorsResetPasswordConfirmDiv')
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

                    {!passwordChanged ?
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <div id="errorsResetPasswordConfirmDiv" />

                            <Form ref={formRef} noValidate validated={validated} >

                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-unlock-alt" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder={props.t('account.PasswordNew')}
                                            onChange={(e) => setPassword1(e.target.value)}
                                            required
                                            autoComplete="new-password"
                                            minLength="8"
                                            maxLength="16"
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <i className="fas fa-eye" /> : <i className="fas fa-eye-slash" />}
                                            </InputGroup.Text>
                                        </InputGroup.Append>
                                        <Form.Text className="text-muted">
                                            {props.t('account.PasswordResetSecurityExplanation')}
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                        {props.t('error.FieldMinLengthError', { field_name: '', length: '8' })}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><i className="fas fa-unlock-alt" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder={props.t('account.PasswordNewConfirm')}
                                            onChange={(e) => setPassword2(e.target.value)}
                                            required
                                            minLength="8"
                                            maxLength="16"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('error.FieldMinLengthError', { field_name: '', length: '8' })}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <input type="submit" value={props.t('generic.Accept')} className="primary" onClick={_confirm} />
                                </Form.Group>

                                <Form.Group className="form-group-center">
                                    <a href={HOME_URL} style={{ display: 'block', textAlign: 'center' }} >{props.t('link.GoTo', { param: props.t('link.Home') })}</a>
                                </Form.Group>
                            </Form>

                        </div>
                        :
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <p>{props.t('account.PasswordUpdated')}</p>
                            <a href={HOME_URL} style={{ display: 'block', textAlign: 'center' }} >{props.t('link.GoTo', { param: props.t('link.Home') })}</a>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(ResetPasswordConfirm)