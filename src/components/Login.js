import React, { useState } from 'react'
import { translate } from 'react-multi-lang'
import { G_USER_ID, G_USER_EMAIL, G_AUTH_TOKEN } from '../constants'
import SigninUserMutation from '../mutations/SigninUserMutation'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function _confirm() {
        // alert("email: " + email + " -- password: " + password)
        SigninUserMutation(email, password, (token) => {
            _saveUserData(token)
            props.history.push('/')
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

                        {/* <form> */}
                        {/* <div><h3>{props.t('login.SignIn')}</h3></div>
                        <div className="row gtr-uniform">
                            <div className="col-7">
                                <input type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={props.t('login.Email')} />
                            </div>
                            <div className="col-7">
                                <input type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={props.t('login.Password')} />
                            </div>

                            <div className="col-7">
                                <div>
                                    <input type="submit" value={props.t('login.LogIn')} className="primary" />
                                </div>
                                <div>
                                    <a href="#">{props.t('login.EmailForgotten')}</a>
                                </div>
                            </div>
                        </div> */}

                        <h3>{props.t('login.SignIn')}</h3>

                        <input type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={props.t('login.Email')} />

                        <input type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={props.t('login.Password')} />

                        <input type="submit" value={props.t('login.LogIn')} className="primary" onClick={() => _confirm()} />
                        <a href="#">{props.t('login.EmailForgotten')}</a>
                        {/* </form> */}

                        <div>
                            Email: {email}<br />
                            Password: {password}<br />
                            G_USER_EMAIL: {localStorage.getItem(G_USER_EMAIL)}<br />
                            G_AUTH_TOKEN: {localStorage.getItem(G_AUTH_TOKEN)}<br />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )

}

export default translate(Login)