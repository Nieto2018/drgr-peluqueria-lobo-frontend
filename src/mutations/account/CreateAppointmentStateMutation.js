import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
  mutation CreateAppointmentStateMutation($name: String!){
    createAppointmentState(name: $name){
      appointmentStateNode{
        id
        name
      }
    }
  }
`

export default (name, callback) => {
  const variables = {
    name
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}