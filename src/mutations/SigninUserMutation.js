import {
    commitMutation,
    graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SigninUserMutation($email: String!, $password: String!) {
        tokenAuth(username: $email, password: $password){
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
            onCompleted: (response) => {
                const token = response.tokenAuth.token
                callback(token)
            },
            onError: err => console.error(err),
        },
    )
}
