import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { translate } from 'react-multi-lang'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Link } from "react-router-dom"

import { HOME_URL } from '../../Constants'
import CreateAccountMutation from '../../mutations/account/CreateAccountMutation'
import { ListAlert, PhoneInput } from '../utils/CustomComponents'
import SendVerificationEmailMutation from '../../mutations/account/SendVerificationEmailMutation'


function SignUp(props) {

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false)

    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [name, setName] = useState('')
    const [surnames, setSurnames] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showPhoneNumberInvalid, setShowPhoneNumberInvalid] = useState(false)

    // It is true when the Rest API to create user is called without any error
    const [userCreated, setUserCreated] = useState(false)

    function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        setShowPhoneNumberInvalid(!isValidPhoneNumber(phoneNumber))
        const isValidForm = form.checkValidity() && isValidPhoneNumber(phoneNumber)
        setValidated(true);

        if (isValidForm) {
            CreateAccountMutation(
                email,
                password1,
                password2,
                name,
                surnames,
                phoneNumber,
                (data, errors) => {
                    let errorMessageList = []

                    if (errors.length > 0) {
                        errors.forEach(error => {
                            if ('EmailRequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Email') }))
                            } else if ('EmailRegexError' === error) {
                                errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
                            } else if ('EmailAlreadyRegisteredError' === error) {
                                errorMessageList.push(props.t('account.backendError.EmailAlreadyRegisteredError'))
                            } else if ('Password1RequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword1') }))
                            } else if ('Password2RequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword2') }))
                            } else if ('PasswordsNotMatchError' === error) {
                                errorMessageList.push(props.t('account.backendError.PasswordsNotMatchError'))
                            } else if ('PasswordRegexError' === error) {
                                errorMessageList.push(props.t('account.backendError.PasswordRegexError'))
                            } else if ('NameRequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Name') }))
                            } else if ('SurnamesRequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Surnames') }))
                            } else if ('PhoneNumberRequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.PhoneNumber') }))
                            } else if ('PhoneNumberNotValidError' === error) {
                                errorMessageList.push(props.t('error.FieldInvalidError', { field_name: props.t('account.PhoneNumber') }))
                                setShowPhoneNumberInvalid(true)
                            } else {
                                errorMessageList.push(props.t('error.AdministratorContact'))
                            }
                        })

                    } else {

                        if ("OK" === data.result) {
                            SendVerificationEmailMutation(email, "ACTIVATE_ACCOUNT", (dataEmail, errors) => {
                                if (errors.length > 0) {
                                    errors.forEach(error => {
                                        console.error(error)
                                    })
                                    errorMessageList.push(props.t('account.error.ActivationEmailNotSentError'))
                                } else {
                                    setUserCreated(true)
                                }
                            })
                        } else {
                            errorMessageList.push(props.t('error.AdministratorContact'))
                        }

                    }

                    if (errorMessageList.length > 0) {
                        ReactDOM.render(
                            <ListAlert variant="danger" messagesList={errorMessageList} />,
                            document.getElementById('errorsCreateAccountConfirmDiv'))
                    }
                }
            )
        }
    }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">

                    {!userCreated ?
                        <div className="content">

                            <h3>{props.t('account.CreateAccount')}</h3>

                            <div id="errorsCreateAccountConfirmDiv" />

                            <Form ref={formRef} noValidate validated={validated} >

                                {/* Email */}
                                <Form.Group controlId="formResetEmail">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrependEmail" className="text-icon"><i className="fas fa-at" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="email"
                                            placeholder={props.t('account.Email')}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('account.error.EnterValidEmailError')}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                {/* Password */}
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrependPassword1"><i className="fas fa-unlock-alt" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder={props.t('account.Password')}
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
                                            <InputGroup.Text id="inputGroupPrependPassword2"><i className="fas fa-unlock-alt" /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type={showPassword ? "text" : "password"}
                                            placeholder={props.t('account.PasswordConfirm')}
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

                                {/* User data */}
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrependName">{props.t('account.Name')}</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder={props.t('account.Name')}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            maxLength="30"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('error.FieldRequired', { field_name: props.t('account.Name') })}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrependSurnames">{props.t('account.Surnames')}</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder={props.t('account.Surnames')}
                                            onChange={(e) => setSurnames(e.target.value)}
                                            required
                                            maxLength="150"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('error.FieldRequired', { field_name: props.t('account.Surnames') })}
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                            </Form>

                            {/* Phone number */}
                            <div className="margin-bottom-20px">
                                <Form.Group>
                                    <InputGroup className="align-center-content">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrependPhoneNumber"><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder={props.t('account.PhoneNumber')}
                                            disabled />
                                        <PhoneInput
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                            showPhoneNumberInvalid={showPhoneNumberInvalid}
                                            setShowPhoneNumberInvalid={setShowPhoneNumberInvalid} />
                                    </InputGroup>
                                </Form.Group>
                            </div>

                            <div className="align-center-content margin-bottom-20px">
                                <input type="submit" value={props.t('generic.Accept')} className="primary" onClick={_confirm} />
                            </div>
                            <div className="align-center-content">
                                <Link to={HOME_URL} >{props.t('link.GoTo', { param: props.t('link.Home') })}</Link>
                            </div>


                        </div>
                        :
                        <div className="content">

                            <h3>{props.t('account.CreateAccount')}</h3>

                            <p>{props.t('account.CreateAccountEmailSent', { email_address: email })}</p>
                            <Link to={HOME_URL} >{props.t('link.GoTo', { param: props.t('link.Home') })}</Link>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(SignUp)