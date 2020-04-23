import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { translate } from 'react-multi-lang'
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

import {
    G_USER_EMAIL,
    G_AUTH_TOKEN,
    G_AUTH_TOKEN_VERIFIED,
    SIGN_UP_URL,
    RESET_PASSWORD_EMAIL_URL,
    G_USER_NAME
} from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import MeQuery from '../../queries/account/MeQuery'
import TokenAuthMutation from '../../mutations/account/TokenAuthMutation'


function LogIn(props) {

    let history = useHistory();
    let location = useLocation();

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    async function _confirm(e) {
        e.preventDefault()

        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true)

        if (isValidForm) {
            TokenAuthMutation(email, password, (token, errors) => {
                let errorMessageList = []
                if (errors !== null) {
                    if ('Please, enter valid credentials' === errors[0].message) {
                        errorMessageList.push(props.t('account.backendError.EnterValidCredentialsError'))
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
                }
            })
        }
    }

    function _saveUserData(token) {
        localStorage.setItem(G_USER_EMAIL, email)
        localStorage.setItem(G_AUTH_TOKEN, token)
        localStorage.setItem(G_AUTH_TOKEN_VERIFIED, true)

        MeQuery((data) => {
            let username = ''
            if (data) {
                username = data.me.firstName
            }
            localStorage.setItem(G_USER_NAME, username)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        })
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
                                        {props.t('account.error.EnterValidEmailError')}
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
                                        {props.t('error.FieldRequired', { field_name: props.t('account.Password') })}
                                    </Form.Control.Feedback>
                                </InputGroup>

                            </Form.Group>

                            <Form.Group className="form-group-center">
                                <input type="submit" value={props.t('account.LogIn')} className="primary" onClick={_confirm} />
                            </Form.Group>

                            <Form.Group className="form-group-center">
                                <Link to={RESET_PASSWORD_EMAIL_URL}>{props.t('account.PasswordForgot')}</Link>
                            </Form.Group>

                            <Form.Group className="form-group-center" style={{ borderTop: "grey solid thin", paddingTop: "20px" }}>
                                <Link to={SIGN_UP_URL} className="button small">{props.t('account.CreateAccount')}</Link>
                            </Form.Group>

                        </Form>

                    </div>

                </div>

            </section>

        </div>
    )

}

export default translate(LogIn)