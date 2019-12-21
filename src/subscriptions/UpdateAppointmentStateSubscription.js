import {
    graphql,
    requestSubscription
} from 'react-relay'

import environment from '../Environment'

const onAppointmentStateAction = graphql`
    subscription UpdateAppointmentStateSubscription($action: AppointmentStateActionEnum!){
        onAppointmentStateAction(action: $action){
            action
            appointmentStateNode{
                id
                name
            }
        }
    }
  `

export default () => {

    const subscriptionConfig = {
        subscription: onAppointmentStateAction,
        variables: {
            action: "Update"
        },
        updater: proxyStore => {
            // Update the value in the view with the value within the received responses 
            // everytime that receive a respomse from the server
            const appointmentStateAction = proxyStore.getRootField('onAppointmentStateAction')
            const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
            const appointmentStateId = appointmentStateNode.getValue('id')
            const newName = appointmentStateNode.getValue('name')

            const appointmentState = proxyStore.get(appointmentStateId)
            appointmentState.setValue(newName, 'name')
        },
        onError: error => console.log(`An error occured:`, error)
    }

    requestSubscription(
        environment,
        subscriptionConfig
    )

}