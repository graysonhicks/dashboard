import React, { Component } from 'react';
import './UserStats.css';

class UserStatsComponent extends Component {

  defaultProps = {
      user: {
        name: "Thomas"
      }
  }
  render() {
    return (
      <div className="user-stats-container">
        <h1 className="user-heading">User Name: {this.props.user.name} </h1>
        <h3>User Age: {this.props.user.age} </h3>
        <p>User Bio: {this.props.user.bio} </p>
      </div>
    );
  }
}

export default UserStatsComponent;
