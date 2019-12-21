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

export default (email, password, callback) => {
    const variables = {
        "input":{
            "email": email,
            "password": password
        }
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
            onError: err => {
                console.error(err)
                const errors = [err]
                callback(null, errors)
            },
        },
    )
}
