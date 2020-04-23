import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { translate } from 'react-multi-lang'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Link } from "react-router-dom"

import { G_USER_EMAIL, HOME_URL } from '../../Constants'
import { ListAlert, PhoneInput } from '../utils/CustomComponents'
import EditAccountMutation from '../../mutations/account/EditAccountMutation'
import SendVerificationEmailMutation from '../../mutations/account/SendVerificationEmailMutation'
import toast from '../utils/Toast'


function EditAccount(props) {


    const email = localStorage.getItem(G_USER_EMAIL)
    const updateEmailFormRef = React.createRef()
    const [validatedUpdateEmailForm, setValidatedUpdateEmailForm] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [showUpdateEmailModal, setShowUpdateEmailModal] = useState(false)

    const updatePasswordFormRef = React.createRef()
    const [updatePasswordForm, setUpdatePasswordForm] = useState(false)
    const [validatedUpdatePasswordForm, setValidatedUpdatePasswordForm] = useState(false)
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)

    const updateUserDataFormRef = React.createRef()
    const [updateUserDataForm, setUpdateUserDataForm] = useState(false)
    const [validatedUpdateUserDataForm, setValidatedUpdateUserDataForm] = useState(false)
    const [name, setName] = useState('')
    const [surnames, setSurnames] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showPhoneNumberInvalid, setShowPhoneNumberInvalid] = useState(false)
    const [isVip, setIsVip] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isStaff, setIsStaff] = useState(false)


    // It is true when the Rest API to create user is called without any error
    const [userCreated, setUserCreated] = useState(false)

    function handleShowUpdateEmail(e) {
        e.preventDefault()
        setValidatedUpdateEmailForm(false)
        setNewEmail('')
        setShowUpdateEmailModal(true)
    }

    function handleUpdateEmail(e) {
        e.preventDefault()
        const form = updateEmailFormRef.current
        const isValidForm = form.checkValidity()
        setValidatedUpdateEmailForm(true)

        if (isValidForm) {
            SendVerificationEmailMutation(newEmail, "UPDATE_EMAIL", (data, errors) => {
                    let errorMessageList = []

                    if (errors.length > 0) {
                        errors.forEach(error => {
                            if ('EmailRequiredError' === error) {
                                errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Email') }))
                            } else if ('EmailRegexError' === error) {
                                errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
                            } else if ('EmailAlreadyRegisteredError' === error) {
                                errorMessageList.push(props.t('account.backendError.EmailAlreadyRegisteredError'))
                            } else if ('UserNotLoggedInError' === error) {
                                errorMessageList.push(props.t('account.backendError.UserNotLoggedInError'))
                            } else if ('AccountInactiveError' === error) {
                                errorMessageList.push(props.t('account.backendError.AccountInactiveError'))
                            } else {
                                errorMessageList.push(props.t('error.AdministratorContact'))
                            }
                        })

                    } else {
                        setShowUpdateEmailModal(false)
                        toast(<p><span role="img" aria-label="emoji">📨</span> {props.t('generic.MessageSentToEmail')}</p>)
                    }

                    if (errorMessageList.length > 0) {
                        ReactDOM.render(
                            <ListAlert variant="danger" messagesList={errorMessageList} />,
                            document.getElementById('errorsUpdateEmailDiv'))
                    }
                }
            )
        }
    }

    // function handle-----(e) {
    //     e.preventDefault()
    //     const form = updateEmailFormRef.current
    //     setShowPhoneNumberInvalid(!isValidPhoneNumber(phoneNumber))
    //     const isValidForm = form.checkValidity() && isValidPhoneNumber(phoneNumber)
    //     setValidated(true)

    //     if (isValidForm) {
    //         EditAccountMutation(
    //             email,
    //             name,
    //             surnames,
    //             phoneNumber,
    //             isVip,
    //             isActive,
    //             isStaff,
    //             (data, errors) => {
    //                 let errorMessageList = []

    //                 if (errors.length > 0) {
    //                     errors.forEach(error => {
    //                         if ('EmailRequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Email') }))
    //                         } else if ('EmailRegexError' === error) {
    //                             errorMessageList.push(props.t('account.backendError.InvalidEmailError'))
    //                         } else if ('EmailAlreadyRegisteredError' === error) {
    //                             errorMessageList.push(props.t('account.backendError.EmailAlreadyRegisteredError'))
    //                         } else if ('Password1RequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword1') }))
    //                         } else if ('Password2RequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.NewPassword2') }))
    //                         } else if ('PasswordsNotMatchError' === error) {
    //                             errorMessageList.push(props.t('account.backendError.PasswordsNotMatchError'))
    //                         } else if ('PasswordRegexError' === error) {
    //                             errorMessageList.push(props.t('account.backendError.PasswordRegexError'))
    //                         } else if ('NameRequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Name') }))
    //                         } else if ('SurnamesRequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.Surnames') }))
    //                         } else if ('PhoneNumberRequiredError' === error) {
    //                             errorMessageList.push(props.t('error.FieldRequired', { field_name: props.t('account.PhoneNumber') }))
    //                         } else if ('PhoneNumberNotValidError' === error) {
    //                             errorMessageList.push(props.t('error.FieldInvalidError', { field_name: props.t('account.PhoneNumber') }))
    //                             setShowPhoneNumberInvalid(true)
    //                         } else {
    //                             errorMessageList.push(props.t('error.AdministratorContact'))
    //                         }
    //                     })

    //                 } else {

    //                     if ("OK" === data.result) {
    //                         SendVerificationEmailMutation(email, "UPDATE_EMAIL", (dataEmail, errors) => {
    //                             if (errors.length > 0) {
    //                                 errors.forEach(error => {
    //                                     console.error(error)
    //                                 })
    //                                 errorMessageList.push(props.t('account.error.ActivationEmailNotSentError'))
    //                             } else {
    //                                 setUserCreated(true)
    //                             }
    //                         })
    //                     } else {
    //                         errorMessageList.push(props.t('error.AdministratorContact'))
    //                     }

    //                 }

    //                 if (errorMessageList.length > 0) {
    //                     ReactDOM.render(
    //                         <ListAlert variant="danger" messagesList={errorMessageList} />,
    //                         document.getElementById('errorsCreateAccountConfirmDiv'))
    //                 }
    //             }
    //         )
    //     }
    // }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">

                    {!userCreated ?
                        <div className="content">

                            <h3>{props.t('account.EditAccount')}</h3>

                            {/* Email form */}
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrependEmail" className="text-icon"><i className="fas fa-at" /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="email"
                                    placeholder={props.t('account.Email')}
                                    value={email}
                                    disabled />
                            </InputGroup>

                            <div className="align-center-content">
                                <input type="submit" className="primary small" value={props.t('account.UpdateEmail')} onClick={handleShowUpdateEmail} />
                            </div>

                            <Modal
                                show={showUpdateEmailModal}
                                onHide={() => setShowUpdateEmailModal(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>{props.t('account.UpdateEmail')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <div id="errorsUpdateEmailDiv" />
                                    <Form ref={updateEmailFormRef} noValidate validated={validatedUpdateEmailForm} >
                                        <Form.Group controlId="formUpdateEmail">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrependEmail" className="text-icon"><i className="fas fa-at" /></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="email"
                                                    placeholder={props.t('account.Email')}
                                                    onChange={(e) => setNewEmail(e.target.value)}
                                                    required />
                                                <Form.Text className="text-muted">
                                                    {props.t('account.PasswordResetEmailExplanation')}
                                                </Form.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {props.t('account.error.EnterValidEmailError')}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowUpdateEmailModal(false)}>{props.t('generic.Cancel')}</Button>
                                    <Button variant="danger" onClick={handleUpdateEmail}>{props.t('generic.Accept')}</Button>
                                </Modal.Footer>
                            </Modal>

                            {/* Password form */}
                            <Form ref={updatePasswordFormRef} noValidate validated={validatedUpdatePasswordForm} >

                                {/* Password */}
                                <Form.Group style={{ borderTop: "grey solid thin", paddingTop: "20px" }}>
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

                                <Form.Group className="form-group-center">
                                    <input type="button" className="primary small" value={props.t('account.UpdatePassword')} onClick={handleShowUpdateEmail} />
                                </Form.Group>


                            </Form>

                            {/* User data form */}
                            <h4 style={{ borderTop: "grey solid thin", paddingTop: "20px" }}>{props.t('account.UserData')}</h4>
                            <Form ref={updateUserDataFormRef} noValidate validated={validatedUpdateUserDataForm} >

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
                                <input type="submit" value={props.t('generic.Save')} className="primary small" />
                            </div>
                            <div className="align-center-content">
                                <Link to={HOME_URL} >{props.t('link.GoTo', { destination: props.t('link.Home') })}</Link>
                            </div>


                        </div>
                        :
                        <div className="content">

                            <h3>{props.t('account.EditAccount')}</h3>

                            <p>{props.t('account.CreateAccountEmailSent', { email_address: email })}</p>
                            <Link to={HOME_URL} >{props.t('link.GoTo', { destination: props.t('link.Home') })}</Link>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(EditAccount)