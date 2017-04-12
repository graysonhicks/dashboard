import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './UserStats.css';
import UserDoughnutComponent from '../UserDoughnut/UserDoughnut';
import UserLineComponent from '../UserLine/UserLine'

class UserStatsComponent extends Component {

  render() {
    return (
      <div className="user-stats-container">
          <Row>
              <Col xs={12}>
                  <h1 className="user-heading">User Name: {this.props.user.name} </h1>
                  <h3>User Age: {this.props.user.age} </h3>
                  <p>User Bio: {this.props.user.bio} </p>
              </Col>
          </Row>
          <Row>
            <Col xs={12}>
                <h2 className="stat-heading"> {this.props.stat.name} </h2>
                <p> {this.props.stat.description} </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
                <UserDoughnutComponent stat={this.props.stat}></UserDoughnutComponent>
            </Col>
            <Col xs={6}>
                <UserLineComponent stat={this.props.stat}></UserLineComponent>
            </Col>
          </Row>
      </div>
    );
  }
}

export default UserStatsComponent;
