import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation UpdateEmailMutation($token: String!) {
        updateEmail(token: $token){
            oldEmail
            newEmail
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
                if (null == response.updateEmail) {
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                } else {
                    data = response.updateEmail
                    errors = response.updateEmail.errors
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
