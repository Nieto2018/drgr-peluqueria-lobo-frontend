import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

import CreateAppointmentStateMutation from '../mutations/CreateAppointmentStateMutation'

class CreateAppointmentState extends Component {
  state = {
    name: ''
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  className='mb2'
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  type='text'
                  placeholder='A name for the appointment state'
                />
              </td>
              <td>
                <div
                  className='button'
                  onClick={(e) => this._createAppointmentState()}
                >
                  Create
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

  _createAppointmentState = () => {
    const { name } = this.state
    CreateAppointmentStateMutation(name, () => console.log(`Mutation create completed`))
  }
  
}

export default CreateAppointmentState