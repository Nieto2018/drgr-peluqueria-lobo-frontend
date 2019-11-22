import React, { useState } from 'react'
import { translate } from 'react-multi-lang'
import { RESET_PASSWORD_URL } from '../../constants'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'


function ResetPassword(props) {
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    async function _confirm() {
        setShow(false)
        axios.post(RESET_PASSWORD_URL, {
            email: email,
        }).then(function (response) {
            setEmailSent(true);
        }).catch(function (error) {
            if (error.message === 'Network Error') {
                setError(props.t('error.AdministratorContact'))
                setShow(true)
            }
        });
    }

    return (
        <div>

            <section id="main" className="wrapper">
                <div className="inner login">

                    {!emailSent ?
                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <p>{props.t('account.PasswordResetEmailExplanation')}</p>

                            <input type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={props.t('account.Email')} />

                            {show &&
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                    {error}
                                </Alert>
                            }

                            <input type="submit" value={props.t('generic.Reset')} className="primary" onClick={() => _confirm()} />
                        </div>
                        :

                        <div className="content">

                            <h3>{props.t('account.PasswordReset')}</h3>

                            <p>{props.t('account.PasswordResetEmailSent', { param: email })}</p>
                            <a href="/">{props.t('link.GoTo', { param: props.t('link.Home') })}</a>
                        </div>

                    }

                </div>

            </section>

        </div>
    )

}

export default translate(ResetPassword)