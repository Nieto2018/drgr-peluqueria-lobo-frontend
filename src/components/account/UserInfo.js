import React from 'react'
import { translate } from 'react-multi-lang'
import { useHistory } from "react-router-dom"
import { Dropdown, Image } from 'semantic-ui-react'

import {
    HOME_URL,
    G_USER_NAME,
    LOG_IN_URL,
} from '../../Constants'
import Session from './Session'
import man from '../../styles/images/man.png'


function UserInfo(props) {
    let history = useHistory()
    const username = localStorage.getItem(G_USER_NAME)

    const trigger = (
        <div className="user-info">
            <Image avatar src={man}
                alt='Icons made by https://www.flaticon.com/authors/vectors-market from https://www.flaticon.es' />
            <p className="user-info-name">{username}</p>
        </div>
    )

    const options = [
        {
            key: 'logged-in-user',
            text: (
                <span>
                    {props.t('account.Welcome')} <strong>{username}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'user', text: props.t('account.Account'), icon: 'user', onClick: () => alert("user") },
        { key: 'settings', text: props.t('generic.Settings'), icon: 'settings', onClick: () => alert("settings") },
        { key: 'sign-out', text: props.t('account.SignOut'), icon: 'lock', onClick: () => Session.signout(() => history.push(HOME_URL)) },
    ]

    if (Session.isAuthenticated()) {
        return (
            <Dropdown
                trigger={trigger}
                options={options}
                pointing='top right'
                icon={null} />
        )
    } else {

        return (
            <div className="user-info">
                <input type="button"
                    value={props.t('account.SignIn')}
                    className="primary fit small"
                    onClick={() => history.push(LOG_IN_URL)} />
            </div>
        )
    }

}

export default translate(UserInfo)