import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import axios from 'axios'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'
// import queryString from 'query-string'

import {
    RESET_PASSWORD_CONFIRM_API_URL,
    HOME_URL
} from '../../constants'
import { ListAlert } from '../utils/CustomComponents'


function ResetPasswordConfirm(props) {

    // let url = props.location.search;
    // let params = queryString.parse(url);

    // const token = params["token"]

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // It is true when the Rest API to reset email is called without any error
    const [passwordChanged, setPasswordChanged] = useState(false);

    async function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true);

        if (isValidForm) {
            // axios.post(RESET_PASSWORD_CONFIRM_API_URL, {
            //     token: token,
            //     new_password1: password1,
            //     new_password2: password2,
            // }).then(function (response) {
            //     if ("Password has been reset with the new password." === response.data.detail) {
            //         setPasswordChanged(true);
            //     } else {
            //         const errorMessageList = [props.t('error.AdministratorContact')]
            //         ReactDOM.render(
            //             <ListAlert variant="danger" messagesList={errorMessageList} />,
            //             document.getElementById('errorsResetPasswordConfirmDiv')
            //         )
            //     }
            // }).catch(function (error) {
            //     let errorMessageList = []
            //     if (error.message === 'Network Error') {
            //         errorMessageList.push(props.t('error.AdministratorContact'))
            //     } else {

            //         if (null != error.response.data.uid) {
            //             if ('This field is required.' === error.response.data.uid[0]
            //                 || 'This field may not be blank.' === error.response.data.uid[0]) {
            //                 errorMessageList.push(props.t('error.UidNotFoundError'))
            //             } else if ('Invalid value' === error.response.data.uid[0]) {
            //                 errorMessageList.push(props.t('error.InvalidUid'))
            //             }
            //         }

            //         if (null != error.response.data.token) {
            //             if ('This field is required.' === error.response.data.token[0]
            //                 || 'This field may not be blank.' === error.response.data.token[0]) {
            //                 errorMessageList.push(props.t('error.TokenNotFoundError'))
            //             } else if ('Invalid value' === error.response.data.token[0]) {
            //                 errorMessageList.push(props.t('error.InvalidToken'))
            //             }
            //         }

            //         if (null != error.response.data.new_password1 &&
            //             ('This field is required.' === error.response.data.new_password1[0]
            //                 || 'This field may not be blank.' === error.response.data.new_password1[0])) {
            //             errorMessageList.push(props.t('error.FieldRequired', { param: props.t('account.NewPassword1') }))
            //         }

            //         if (null != error.response.data.new_password2) {
            //             if ('This field is required.' === error.response.data.new_password2[0]
            //                 || 'This field may not be blank.' === error.response.data.new_password2[0]) {
            //                 errorMessageList.push(props.t('error.FieldRequired', { param: props.t('account.NewPassword2') }))
            //             } else if ("The two password fields didn't match." === error.response.data.new_password2[0]) {
            //                 errorMessageList.push(props.t('error.PasswordNotMatch'))
            //             }
            //         }
            //     }

            //     const header = errorMessageList.length > 1 ? props.t('error.Errors') : null
            //     ReactDOM.render(
            //         <ListAlert header={header} variant="danger" messagesList={errorMessageList} />,
            //         document.getElementById('errorsResetPasswordConfirmDiv')
            //     )

            // })
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
                                            {props.t('error.FieldRequired', { param: '' })}
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
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {props.t('error.FieldRequired', { param: '' })}
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