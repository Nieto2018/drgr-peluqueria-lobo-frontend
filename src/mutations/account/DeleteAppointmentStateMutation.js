import { commitMutation, graphql } from 'react-relay'

import environment from '../../Environment'

const mutation = graphql`
  mutation DeleteAppointmentStateMutation($id: String!){
    deleteAppointmentState(id: $id){
      appointmentStateNode{
        id
        name
      }
    }
  }
`

export default (id, callback) => {
  const variables = {
    id
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