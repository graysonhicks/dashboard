import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import logo from '../logo.svg';

var navbarStyles = {
    'backgroundColor': '#4b4b4b',
    'marginBottom': '0px',
    'borderRadius': '0px',
    'border': 'none'
}

class NavbarComponent extends Component {


  render() {
    return (
        <Navbar style={navbarStyles} inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Image className="app-logo" src={logo} />
                CRA Dashboard
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
  }
}

export default NavbarComponent;
