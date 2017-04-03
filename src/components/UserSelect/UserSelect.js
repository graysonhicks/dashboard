import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './UserSelect.css';

class UserSelectComponent extends Component {

  render() {
    return (
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl componentClass="select" onChange={this.props.changeUser} placeholder="User">
            <option value="Grayson Hicks">Grayson Hicks</option>
            <option value="Thomas Merton">Thomas Merton</option>
            <option value="Albert Einstein">Albert Einstein</option>
          </FormControl>
        </FormGroup>

    );
  }
}

export default UserSelectComponent;
