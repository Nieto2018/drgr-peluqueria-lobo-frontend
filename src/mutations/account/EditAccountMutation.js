import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation EditAccountMutation($input: EditAccountInput!) {
        editAccount(input: $input){
            email
            result
            errors
        }
    }
  `

export default (
    email,
    name,
    surnames,
    phoneNumber,
    isVip,
    isActive,
    isStaff,
    callback
) => {
    const variables = {
        "input": {
            "email": email,
            "name": name,
            "surnames": surnames,
            "phoneNumber": phoneNumber,
            "isVip": isVip,
            "isActive": isActive,
            "isStaff": isStaff
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
                if (null == response.editAccount) {
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                } else {
                    data = response.editAccount
                    errors = response.editAccount.errors
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
