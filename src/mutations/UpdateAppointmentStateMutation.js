import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation UpdateAppointmentStateMutation($id: String!, $name: String!){
    updateAppointmentState(id: $id, name: $name){
      appointmentStateNode{
        id
        name
      }
    }
  }
`

export default (id, name) => {
  const variables = {
    id,
    name
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: proxyStore => {
        // Update directly the value in the view before receiving response from the server
        const appointmentState = proxyStore.get(id)
        appointmentState.setValue(name, 'name')
      },
      updater: proxyStore => {
        // Update the value in the view with the value within the received response from the server
        const appointmentStateAction = proxyStore.getRootField('updateAppointmentState')
        const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
        const newName = appointmentStateNode.getValue('name')

        const appointmentState = proxyStore.get(id)
        appointmentState.setValue(newName, 'name')
      },
      onError: err => console.error(err),
    },
  )
}