import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './UserSelect.css';
import UserOptionComponent from '../UserOption/UserOption'

class UserSelectComponent extends Component {

  render() {
    return (
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl componentClass="select" onChange={this.props.changeUser} placeholder="User">
            {this.props.users.map((user, i) =>

                <UserOptionComponent key={i}
                                     name={user.name}
                                     index={i}

                    />
            )}
          </FormControl>
        </FormGroup>

    );
  }
}

export default UserSelectComponent;
