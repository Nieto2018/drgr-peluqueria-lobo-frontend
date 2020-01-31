import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation ResetPasswordMutation($token: String, $password1: String, $password2: String) {
        resetPassword(token: $token, password1: $password1, password2: $password2){
            email
            result
            errors
        }
    }
  `

export default (token, password1, password2, callback) => {
    const variables = {
        "token": token,
        "password1": password1,
        "password2": password2,
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: response => {
                let data = null
                let errors = []
                if (null == response.resetPassword) {
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                } else {
                    data = response.resetPassword
                    errors = response.resetPassword.errors
                }
                callback(data, errors)
            },
            onError: err => {
                console.error(err)
                const errors = [err]
                callback(null, errors)
            },
        },
    )
}
