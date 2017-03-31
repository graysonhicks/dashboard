import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Image } from 'react-bootstrap';
import './Sidebar.css';

class SidebarComponent extends Component {

  render() {
    return (
            <Row>
                <Col xs={12}>
                        <div className="sidebar-image-container">
                            <Image src="http://placehold.it/170x181" rounded />
                        </div>
                        <ListGroup>
                          <ListGroupItem className="sidebar-list-group-item" href="#" active>Link 1</ListGroupItem>
                          <ListGroupItem className="sidebar-list-group-item" href="#">Link 2</ListGroupItem>
                          <ListGroupItem className="sidebar-list-group-item" href="#" disabled>Link 3</ListGroupItem>
                        </ListGroup>
                </Col>
            </Row>

    );
  }
}

export default SidebarComponent;
