import {
    commitMutation,
    graphql
} from 'react-relay'

import { G_USER_EMAIL, G_AUTH_TOKEN } from '../Constants'
import environment from '../Environment'
import RefreshTokenMutation from './RefreshTokenMutation'

const mutation = graphql`
    mutation VerifyTokenMutation($input: VerifyInput!){
        verifyToken(input: $input){
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
                        localStorage.removeItem(G_USER_EMAIL)
                        localStorage.removeItem(G_AUTH_TOKEN)
                    }else{
                        RefreshTokenMutation()
                    }
                },
                onError: err => {
                    console.error(err)
                    localStorage.removeItem(G_USER_EMAIL)
                    localStorage.removeItem(G_AUTH_TOKEN)
                },
            },
        )
    }
}
