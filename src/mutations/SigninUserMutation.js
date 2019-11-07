import {
    commitMutation,
    graphql
} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation SigninUserMutation($input: ObtainJSONWebTokenInput!) {
        tokenAuth(input: $input) {
            token
        }
    }
  `

export default (username, password, callback) => {
    const variables = {
        input: {
            username,
            password
        }
    }

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                const token = response.tokenAuth.token
                callback(token)
            },
            onError: err => console.error(err),
        },
    )
}
