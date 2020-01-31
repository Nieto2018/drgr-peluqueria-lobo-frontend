import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation CreateAccountMutation($input: CreateAccountInput!) {
        createAccount(input: $input){
            email
            result
            errors
        }
    }
  `

export default (
    email,
    password1,
    password2,
    name,
    surnames,
    phoneNumber,
    callback
) => {
    const variables = {
        "input": {
            "email": email,
            "password1": password1,
            "password2": password2,
            "name": name,
            "surnames": surnames,
            "phoneNumber": phoneNumber
        }
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: response => {
                let data = null
                let errors = []
                if (null == response.createAccount) {
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                } else {
                    data = response.createAccount
                    errors = response.createAccount.errors
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
