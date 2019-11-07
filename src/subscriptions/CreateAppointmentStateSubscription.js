import {
    graphql,
    requestSubscription
} from 'react-relay'
import environment from '../Environment'

const onAppointmentStateAction = graphql`
    subscription CreateAppointmentStateSubscription{
        onAppointmentStateAction(action: "create"){
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
        variables: {},
        updater: proxyStore => {
            // Create a record
            const appointmentStateAction = proxyStore.getRootField('onAppointmentStateAction')
            const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
            const appointmentStateId = appointmentStateNode.getValue('id')
            const appointmentStateName = appointmentStateNode.getValue('name')

            component.forceUpdate()

            // proxyStore.create(appointmentStateId, appointmentStateName)
        },
        onError: error => console.log(`An error occured:`, error)
    }

    requestSubscription(
        environment,
        subscriptionConfig
    )

}