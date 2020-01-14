import React from "react"
import { Redirect, Route } from "react-router-dom"

import {
    G_AUTH_TOKEN_VERIFIED,
    LOG_IN_URL
} from '../../Constants'
import VerifyTokenMutation from '../../mutations/VerifyTokenMutation'

export const Session = {
    verifyToken(callback) {
        VerifyTokenMutation(callback)
    },
    isAuthenticated() {
        let isAuthenticated = false
        const token_verified = localStorage.getItem(G_AUTH_TOKEN_VERIFIED)
        if (token_verified && token_verified === "true") {
            isAuthenticated = true
        } else {
            Session.signout()
        }
        return isAuthenticated
    },
    signout() {
        localStorage.clear()
    }

}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                Session.isAuthenticated() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: LOG_IN_URL,
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}