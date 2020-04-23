import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation ActivateAccountMutation($token: String) {
        activateAccount(token: $token){
            email
            result
            errors
        }
    }
  `

export default (token, callback) => {
    const variables = {
        "token": token
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: response => {
                let data = null
                let errors = []
                if (null == response.activateAccount) {
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                } else {
                    data = response.activateAccount
                    errors = response.activateAccount.errors
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
