import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './UserDoughnut.css';



class UserDoughnutComponent extends Component {

  render() {
    return (
      <Doughnut data={this.props.stat.data}></Doughnut>
    );
  }
}

export default UserDoughnutComponent;
