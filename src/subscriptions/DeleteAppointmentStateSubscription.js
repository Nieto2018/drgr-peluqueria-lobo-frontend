import {
    graphql,
    requestSubscription
} from 'react-relay'

import environment from '../Environment'

const onAppointmentStateAction = graphql`
    subscription DeleteAppointmentStateSubscription($action: AppointmentStateActionEnum!) {
        onAppointmentStateAction(action: $action) {
            action
            appointmentStateNode{
                id
                name
            }
        }
    }
  `

export default (component) => {

    const subscriptionConfig = {
        subscription: onAppointmentStateAction,
        variables: {
            action: "Delete"
        },
        updater: proxyStore => {
            // Delete a record
            const appointmentStateAction = proxyStore.getRootField('onAppointmentStateAction')
            const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
            const appointmentStateId = appointmentStateNode.getValue('id')

            component.forceUpdate()
            // proxyStore.delete(appointmentStateId)
        },
        onError: error => console.log(`An error occured:`, error)
    }

    requestSubscription(
        environment,
        subscriptionConfig
    )

}