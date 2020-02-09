import React, { Component } from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import UpdateAppointmentStateMutation from '../mutations/account/UpdateAppointmentStateMutation'
import DeleteAppointmentStateMutation from '../mutations/account/DeleteAppointmentStateMutation'

class AppointmentStatesNode extends Component {

  state = {
    name: ''
  }

  render() {
    return (
      <tr>
        <td>{this.props.appointmentStateNode.id}</td>
        <td>{this.props.appointmentStateNode.name}</td>
        <td>
          <label>
              <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder='A name for the appointment state' />
          </label>
        </td>
        <td>
          <div className='button' onClick={() => this._updateAppointmentStateName()} >
            Update name
          </div>
        </td>
        <td>
          <div className='button' onClick={() => this._deleteAppointmentStateName()} >
            Delete
          </div>
        </td>
      </tr>
    )
  }

  _updateAppointmentStateName = async () => {
    const id = this.props.appointmentStateNode.id
    const name = this.state.name
    UpdateAppointmentStateMutation(id, name)
    this.state.name = ""
  }

  _deleteAppointmentStateName = async () => {
    const id = this.props.appointmentStateNode.id
    DeleteAppointmentStateMutation(id, () => console.log(`Mutation delete completed`))
  }

}

export default createFragmentContainer(AppointmentStatesNode,
  // All fragments should be within brackets although there is just one
  {
    appointmentStateNode: graphql`
      fragment AppointmentStatesNode_appointmentStateNode on AppointmentStateNode {
        id
        name
      }`
  }
)