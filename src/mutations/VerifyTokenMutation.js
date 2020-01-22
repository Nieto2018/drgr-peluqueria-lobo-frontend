import {
    commitMutation,
    graphql
} from 'react-relay'

import { G_AUTH_TOKEN, G_AUTH_TOKEN_VERIFIED } from '../Constants'
// import { G_AUTH_TOKEN } from '../Constants'
import environment from '../Environment'
// import RefreshTokenMutation from './RefreshTokenMutation'
import Session from '../components/account/Session'

const mutation = graphql`
    mutation VerifyTokenMutation($input: VerifyInput!){
        verifyToken(input: $input){
            payload
            clientMutationId
        }
    }
  `

export default async (callback) => {
    const token = localStorage.getItem(G_AUTH_TOKEN)
    let isLoggedIn = false

    if (token && token.length > 0) {

        // About async and await: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await
        isLoggedIn = await new Promise(resolve => {

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

                        if (null != errors) {
                            console.error(errors[0])
                            Session.signout(null)
                        } else {
                            resolve(true) // This command notify that the promise has finished)
                        }
                        resolve(false) // This command notify that the promise has finished)
                    },
                    onError: err => {
                        console.error(err)
                        Session.signout(null)
                        resolve(false) // This command notify that the promise has finished)
                    },
                },
            )
        })
    } else {
        Session.signout(null)
    }
    // Execution continues here when the promise notify that it has finished
    localStorage.setItem(G_AUTH_TOKEN_VERIFIED, isLoggedIn)
    callback()
}