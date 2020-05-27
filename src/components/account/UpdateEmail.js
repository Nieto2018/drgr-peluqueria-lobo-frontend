import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { translate } from 'react-multi-lang'

import { G_USER_EMAIL } from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import SendVerificationEmailMutation from '../../mutations/account/SendVerificationEmailMutation'
import toast from '../utils/Toast'


function EditAccount(props) {

    const email = localStorage.getItem(G_USER_EMAIL)
    const updateEmailFormRef = React.createRef()
    const [validatedUpdateEmailForm, setValidatedUpdateEmailForm] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [showUpdateEmailModal, setShowUpdateEmailModal] = useState(false)

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
        <div className="custom-container-column-center custom-container-mb10">

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
        </div>
    )

}

export default translate(EditAccount)