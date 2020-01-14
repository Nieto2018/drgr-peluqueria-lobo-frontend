import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { translate } from 'react-multi-lang'
import {
    useHistory,
    useLocation
} from "react-router-dom";
import { fetchQuery, graphql } from 'relay-runtime';

import {
    G_USER_EMAIL,
    G_AUTH_TOKEN,
    G_AUTH_TOKEN_VERIFIED,
    SIGN_UP_URL,
    RESET_PASSWORD_EMAIL_URL
} from '../../Constants'
import { ListAlert } from '../utils/CustomComponents'
import environment from '../../Environment'
import SigninUserMutation from '../../mutations/SigninUserMutation'

const query = graphql`
    query LogInQuery{
      me{
          id
          email
        }
    }
`

function LogIn(props) {

    let history = useHistory();
    let location = useLocation();

    const formRef = React.createRef()
    const [validated, setValidated] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [toke, setToke] = useState(localStorage.getItem(G_AUTH_TOKEN));
    const [idMe, setIdMe] = useState('');
    const [emailMe, setEmailMe] = useState('');

    async function _confirm(e) {
        e.preventDefault()

        const form = formRef.current
        const isValidForm = form.checkValidity()
        setValidated(true)

        if (isValidForm) {
            SigninUserMutation(email, password, (token, errors) => {
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

                    // TODO delete
                    setToke(localStorage.getItem(G_AUTH_TOKEN))
                    const variables = {}

                    fetchQuery(environment, query, variables)
                        .then(data => {
                            setIdMe(data.me.id)
                            setEmailMe(data.me.email)
                        });
                    // TODO end delete

                    let { from } = location.state || { from: { pathname: "/" } };
                    history.replace(from);
                }
            })
        }
    }

    function _saveUserData(token) {
        localStorage.setItem(G_USER_EMAIL, email)
        localStorage.setItem(G_AUTH_TOKEN, token)
        localStorage.setItem(G_AUTH_TOKEN_VERIFIED, true)
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
                                <a href={RESET_PASSWORD_EMAIL_URL}>{props.t('account.PasswordForgot')}</a>
                            </Form.Group>

                            <Form.Group className="form-group-center" style={{ borderTop: "grey solid thin", paddingTop: "20px" }}>
                                <a href={SIGN_UP_URL} className="button small">{props.t('account.CreateAccount')}</a>
                            </Form.Group>

                        </Form>

                    </div>

                </div>

                <div>
                    G_USER_EMAIL: {localStorage.getItem(G_USER_EMAIL)}<br />
                    G_AUTH_TOKEN: {toke}<br />
                </div>

                <div>
                    id_me: {idMe}<br />
                    nombre_me: {emailMe}<br />
                </div>
            </section>

        </div>
    )

}

export default translate(LogIn)