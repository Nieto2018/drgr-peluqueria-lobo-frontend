import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'
import { Link } from "react-router-dom"
import queryString from 'query-string'

import { HOME_URL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import UpdateEmailMutation from '../../mutations/account/UpdateEmailMutation'


function UpdateEmail(props) {

    // const formRef = React.createRef()
    // const [validated, setValidated] = useState(false)

    // const [password1, setPassword1] = useState('')
    // const [password2, setPassword2] = useState('')
    // const [showPassword, setShowPassword] = useState(false)

    // It is true when the Rest API to reset email is called without any error
    const [emailUpdated, setEmailUpdated] = useState(false)

    function _confirm(e) {
        e.preventDefault()

        const url = props.location.search
        const params = queryString.parse(url)

        const token = params["token"]

        UpdateEmailMutation(token, (data, errors) => {
            let errorMessageList = []

            if (errors.length > 0) {
                errors.forEach(error => {
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
                    } else if ('AccountDoesNotExistError' === error) {
                        errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
                    } else if ('AccountInactiveError' === error) {
                        errorMessageList.push(props.t('account.backendError.AccountInactiveError'))
                    } else {
                        errorMessageList.push(props.t('error.AdministratorContact'))
                    }
                })

            } else {

                if ("OK" === data.result) {
                    setEmailUpdated(true);
                } else {
                    errorMessageList.push(props.t('error.AdministratorContact'))
                }

            }

            if (errorMessageList.length > 0) {
                ReactDOM.render(
                    <ListAlert variant="danger" messagesList={errorMessageList} />,
                    document.getElementById('errorsUpdateEmailConfirmDiv'))
            }
        })

    }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">

                    {!emailUpdated ?
                        <div className="content">
                            <h3>{props.t('account.UpdateEmail')}</h3>
                            <div id="errorsUpdateEmailConfirmDiv" />
                        </div>
                        :
                        <div className="content">
                            <h3>{props.t('account.UpdateEmail')}</h3>
                            <p>{props.t('account.EmailUpdated')}</p>
                            <Link to={HOME_URL} >{props.t('link.GoTo', { param: props.t('link.Home') })}</Link>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(UpdateEmail)