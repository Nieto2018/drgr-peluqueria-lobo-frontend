import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { translate } from 'react-multi-lang'
import { fetchQuery, graphql } from 'relay-runtime';

import environment from '../../Environment'
import {
    G_USER_EMAIL,
    G_AUTH_TOKEN,
    RESET_PASSWORD_EMAIL_URL
} from '../../constants'
import SigninUserMutation from '../../mutations/SigninUserMutation'
import { ListAlert } from '../utils/CustomComponents'


function SignUp(props) {
    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [idMe, setIdMe] = useState('');
    const [nombreMe, setNombreMe] = useState('');

    async function _confirm(e) {
        e.preventDefault()
        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true)

        if (isValidForm) {
            SigninUserMutation(email, password, (token, errors) => {
                let errorMessageList = []
                if (errors !== null) {
                    if ('EmailNotExists' === errors[0].message) {
                        errorMessageList.push(props.t('error.EnterValidEmail'))
                    } else if ('WrongPassword' === errors[0].message) {
                        errorMessageList.push(props.t('error.WrongPassword'))
                    } else {
                        errorMessageList.push(props.t('error.AdministratorContact'))
                    }

                    const header = errorMessageList.length > 1 ? props.t('error.Errors') : null
                    ReactDOM.render(
                        <ListAlert header={header} variant="danger" messagesList={errorMessageList} />,
                        document.getElementById('errorsLoginDiv')
                    )

                } else {
                    _saveUserData(token)
                    // props.history.push('/')

                    // const variables = {};

                    // fetchQuery(environment, query, variables)
                    //     .then(data => {
                    //         setIdMe(data.me.id)
                    //         setNombreMe(data.me.username)
                    //     });
                }
            })
        }
    }

    function _saveUserData(token) {
        localStorage.setItem(G_USER_EMAIL, email)
        localStorage.setItem(G_AUTH_TOKEN, token)
    }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">
                    <div className="content">

                        <h3>{props.t('account.SignIn')}</h3>

                        <div id="errorsLoginDiv" />

                        <Form ref={formRef} noValidate validated={validated} className="form-center" >

                            <Form.Group controlId="formResetEmail">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend" className="text-icon"><i className="fas fa-at" /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="email"
                                        placeholder={props.t('account.Email')}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                    <Form.Control.Feedback type="invalid">
                                        {props.t('account.EmailInvalid')}
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
                                        placeholder={props.t('account.Password')}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                    <InputGroup.Append>
                                        <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <i className="fas fa-eye" /> : <i className="fas fa-eye-slash" />}
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                    <Form.Control.Feedback type="invalid">
                                        {props.t('error.FieldRequired', { param: props.t('account.Password') })}
                                    </Form.Control.Feedback>
                                </InputGroup>

                            </Form.Group>

                            <Form.Group className="form-group-center">
                                <input type="submit" value={props.t('account.LogIn')} className="primary" onClick={_confirm} />
                            </Form.Group>

                            <Form.Group className="form-group-center">
                                <a href={RESET_PASSWORD_EMAIL_URL}>{props.t('account.PasswordForgot')}</a>
                            </Form.Group>

                            <Form.Group className="form-group-center" style={{borderTop: "grey solid thin", paddingTop: "20px" }}>
                            <a href="/elements" className="button small">{props.t('account.CreateAccount')}</a>
                            </Form.Group>

                        </Form>

                    </div>

                </div>

                <div>
                    G_USER_EMAIL: {localStorage.getItem(G_USER_EMAIL)}<br />
                    G_AUTH_TOKEN: {localStorage.getItem(G_AUTH_TOKEN)}<br />
                </div>

                <div>
                    id_me: {idMe}<br />
                    nombre_me: {nombreMe}<br />
                </div>
            </section>

        </div>
    )

}

export default translate(SignUp)