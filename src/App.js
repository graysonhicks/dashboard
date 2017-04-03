import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';
import HeadingComponent from './components/Heading/Heading-1';
import NavbarComponent from './components/Navbar/Navbar';
import SidebarComponent from './components/Sidebar/Sidebar'
import UserSelectComponent from './components/UserSelect/UserSelect'
import UserStatsComponent from './components/UserStats/UserStats'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {}
    };

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(e) {

    this.setState({
      user: {
        name: e.target.value,
        age: 27,
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    });
  }
  render() {
      console.log(this.state);
    return (
      <div className="app">
          <Grid className="app-container">
              <Col xs={3} className="sidebar-container">
                  <SidebarComponent></SidebarComponent>
              </Col>
              <Col xs={9} className="content-container">
                  <Row>
                       <NavbarComponent></NavbarComponent>
                      <Col xs={9}>
                          <HeadingComponent text="Stats Dashboard"></HeadingComponent>

                      </Col>
                      <Col xs={3}>
                          <UserSelectComponent label="Choose Your User" changeUser={this.changeUser} user={this.state.user} ></UserSelectComponent>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12}>
                        <UserStatsComponent user={this.state.user}></UserStatsComponent>
                      </Col>
                  </Row>
              </Col>
          </Grid>

      </div>
    );
  }
}

export default App;
