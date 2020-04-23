import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { translate } from 'react-multi-lang'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { Link } from "react-router-dom"

import { HOME_URL } from '../../Constants'
import { ListAlert, PhoneInput } from '../utils/CustomComponents'
import EditAccountMutation from '../../mutations/account/EditAccountMutation'
import SendVerificationEmailMutation from '../../mutations/account/SendVerificationEmailMutation'
import UpdateEmail from './UpdateEmail'
import toast from '../utils/Toast'


function EditAccount(props) {

    const updatePasswordFormRef = React.createRef()
    const [updatePasswordForm, setUpdatePasswordForm] = useState(false)
    const [validatedUpdatePasswordForm, setValidatedUpdatePasswordForm] = useState(false)
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordModal, setShowPasswordModal] = useState(false)

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

    return (
        <div>

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

        </div>
    )

}

export default translate(EditAccount)