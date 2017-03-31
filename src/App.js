import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';
import HeadingComponent from './components/Heading';
import NavbarComponent from './components/Navbar';
import SidebarComponent from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="app">
          <Grid className="app-container">
              <Col xs={3} className="sidebar-container">
                  <SidebarComponent></SidebarComponent>
              </Col>
              <Col xs={9} className="content-container">
                  <Row>
                       <NavbarComponent></NavbarComponent>
                      <Col xs={12}>
                          <HeadingComponent text="Heading"></HeadingComponent>
                      </Col>
                  </Row>
              </Col>
          </Grid>

      </div>
    );
  }
}

export default App;
