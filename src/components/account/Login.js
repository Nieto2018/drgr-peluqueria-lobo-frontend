import React, { useState } from 'react'
import { translate } from 'react-multi-lang'
import { G_USER_EMAIL, G_AUTH_TOKEN } from '../../constants'
import SigninUserMutation from '../../mutations/SigninUserMutation'
import Alert from 'react-bootstrap/Alert'

import { fetchQuery, graphql } from 'relay-runtime';
import environment from '../../Environment'

const query = graphql`
    query LoginQuery{
      me{
          id
          username
        }
    }
`

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    const [idMe, setIdMe] = useState('');
    const [nombreMe, setNombreMe] = useState('');

    async function _confirm() {
        setShow(false)
        SigninUserMutation(email, password, (token, errors) => {
            if (errors !== null) {
                setError(errors[0].message)
                setShow(true)
            } else {
                _saveUserData(token)
                // props.history.push('/')

                const variables = {};

                fetchQuery(environment, query, variables)
                    .then(data => {
                        setIdMe(data.me.id)
                        setNombreMe(data.me.username)
                    });
            }
        })
    }

    function _saveUserData(token) {
        localStorage.setItem(G_USER_EMAIL, email)
        localStorage.setItem(G_AUTH_TOKEN, token)
    }

    return (
        <div>

            {/* <section id="banner">
                <div className="inner">
                    <h1>Peluquería Lobo</h1>
                    <p>A responsive business oriented template with a video background<br />
                        designed by <a href="https://templated.co/">TEMPLATED</a> and released under the Creative Commons License.</p>
                </div>
                <video autoPlay loop muted playsInline src={banner} ></video>
            </section> */}

            <section id="main" className="wrapper">
                <div className="inner login">
                    <div className="content">

                        <h3>{props.t('account.SignIn')}</h3>

                        <input type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={props.t('account.Email')} />

                        <input type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={props.t('account.Password')} />

                        {show &&
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                {error}
                            </Alert>
                        }

                        <input type="submit" value={props.t('account.LogIn')} className="primary" onClick={() => _confirm()} />
                        <a href="/account/reset-password">{props.t('account.PasswordForgot')}</a>

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

export default translate(Login)