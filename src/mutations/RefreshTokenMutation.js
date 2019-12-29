import {
    commitMutation,
    graphql
} from 'react-relay'
import { G_USER_EMAIL, G_AUTH_TOKEN } from '../Constants'
import environment from '../Environment'

const mutation = graphql`
    mutation RefreshTokenMutation($input: RefreshInput!){
        refreshToken(input: $input){
            token
            payload
            clientMutationId
        }
    }
  `

export default () => {
    const token = localStorage.token

    if (token) {
        const variables = {
            "input": {
                "token": token,
                "clientMutationId": ""
            }
        }

        commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                    if (null != errors){
                        console.error(errors[0])
                    }else{
                        localStorage.setItem(G_AUTH_TOKEN, response.refreshToken.token)
                    }
                },
                onError: err => {
                    console.error(err)
                },
            },
        )
    }
}
