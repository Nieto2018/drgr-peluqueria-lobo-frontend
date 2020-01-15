import React from 'react'
import {
    graphql,
    requestSubscription
} from 'react-relay'

// If it is neccesary import an object from a file without an 'export default'
// it should between brackets
import { TOAST_TYPE } from '../Constants'
import environment from '../Environment'
import toast from '../components/utils/Toast'


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
            action: "UPDATE_APPOINTMENT_STATE"
        },
        updater: proxyStore => {
            toast(<label>Estado cita actualizada<span role="img" aria-label="emoji">💈</span></label>, TOAST_TYPE.WARNING)

            // Update the value in the view with the value within the received responses 
            // everytime that receive a respomse from the server
            // const appointmentStateAction = proxyStore.getRootField('onAppointmentStateAction')
            // const appointmentStateNode = appointmentStateAction.getLinkedRecord('appointmentStateNode')
            // const appointmentStateId = appointmentStateNode.getValue('id')
            // const newName = appointmentStateNode.getValue('name')

            // const appointmentState = proxyStore.get(appointmentStateId)
            // appointmentState.setValue(newName, 'name')

        },
        onError: error => console.log(`An error occured:`, error)
    }

    requestSubscription(
        environment,
        subscriptionConfig
    )

}