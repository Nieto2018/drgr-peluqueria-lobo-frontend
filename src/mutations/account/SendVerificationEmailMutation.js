import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
    mutation SendVerificationEmailMutation($email: String, $action: AccountActionEnum) {
        sendVerificationEmail(email: $email, action: $action) {
            email
            action
            result
            errors
        }
    }
  `

export default (email, action, callback) => {
    const variables = {
        "email": email,
        "action": action
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: response => {
                let data = null
                let errors = []
                if(null == response.sendVerificationEmail){
                    console.error('NotDataReceived')
                    errors.push('NotDataReceived')
                }else{
                    data = response.sendVerificationEmail
                    errors = response.sendVerificationEmail.errors
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
