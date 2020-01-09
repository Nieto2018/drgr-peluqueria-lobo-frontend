import React from 'react'
import {
    graphql,
    requestSubscription
} from 'react-relay'

import { TOAST_TYPE } from '../Constants'
import environment from '../Environment'
import toast from '../components/utils/Toast'


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
            action: "DELETE_APPOINTMENT_STATE"
        },
        updater: proxyStore => {
            toast(<label>Estado cita eliminada<span role="img" aria-label="emoji">🦄</span></label>, TOAST_TYPE.ERROR)

            // Delete a record
            // const appointmentStateAction = proxyStore.getRootField('onAppointmentStateAction')
            // const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
            // const appointmentStateId = appointmentStateNode.getValue('id')

            // component.forceUpdate()
            // proxyStore.delete(appointmentStateId)
        },
        onError: error => console.log(`An error occured:`, error)
    }

    requestSubscription(
        environment,
        subscriptionConfig
    )

}