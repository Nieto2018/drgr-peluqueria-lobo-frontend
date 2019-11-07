import React, { Component } from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import AppointmentStatesList from './AppointmentStatesList'
import { ITEMS_PER_PAGE } from '../constants'


const AppointmentStatesListPageQuery = graphql`
  query AppointmentStatesListPageQuery{
    relayAppointmentStates{
      ...AppointmentStatesList_relayAppointmentStates
    }
  }
`

// const AppointmentStatesListPageQuery = graphql`
//   query AppointmentStatesListPageQuery(
//       $count: Int!
//   ) {
//     allAppointmentStates{
//       ...AppointmentStatesList_allAppointmentStates
//     }
//   }
// `

class UserListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppointmentStatesListPageQuery}
        variables={{
          count: ITEMS_PER_PAGE,
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            // The passed parameter seems that should be called same than graphql query's name
            return <AppointmentStatesList relayAppointmentStates={props.relayAppointmentStates} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default UserListPage
