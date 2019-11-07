import React, { Component } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { translate } from 'react-multi-lang'

import Table from 'react-bootstrap/Table'

import AppointmentStatesNode from './AppointmentStatesNode'
import CreateAppointmentState from './CreateAppointmentState'
// import CreateAppointmentStateSubscription from '../subscriptions/CreateAppointmentStateSubscription'
import UpdateAppointmentStateSubscription from '../subscriptions/UpdateAppointmentStateSubscription'
// import DeleteAppointmentStateSubscription from '../subscriptions/DeleteAppointmentStateSubscription'

class AppointmentStatesList extends Component {

  render() {
    return (
      <div>
        <div id="heading" >
          <h1>{this.props.t('home.AppointmentsList')}</h1>
        </div>

        <div className="inner">
          Registrar:
          <CreateAppointmentState />
          Lista:
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>New name</th>
                <th>Rename</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.relayAppointmentStates.edges.map(({ node }) => (
                <AppointmentStatesNode key={node.__id} appointmentStateNode={node} />
                // <AppointmentStatesNode key={node.__id} appointmentStateNode={node} refresh={this._refresh()} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // CreateAppointmentStateSubscription(this)
    UpdateAppointmentStateSubscription()
    // DeleteAppointmentStateSubscription(this)
  }

}

export default createFragmentContainer(translate(AppointmentStatesList),
  {
    relayAppointmentStates: graphql`
      fragment AppointmentStatesList_relayAppointmentStates on AppointmentStateNodeConnection {
        edges {
          node {
            ...AppointmentStatesNode_appointmentStateNode
          }
        }
      }
    `
  }
)