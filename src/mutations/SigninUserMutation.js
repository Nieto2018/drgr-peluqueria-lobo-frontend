import {
    commitMutation,
    graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SigninUserMutation($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password) {
            token
        }
    }
  `

export default (email, password, callback) => {
    const variables = {
        email,
        password
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                let token = ''
                if (errors === null)
                    token = response.tokenAuth.token
                callback(token, errors)
            },
            onError: err => console.error(err),
        },
    )
}
